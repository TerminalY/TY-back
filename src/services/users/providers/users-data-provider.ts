import { IUser, User } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import { createCart } from '../../carts/controllers/carts-data-controller'
import { Cart } from "../../../db/models/shopping-cart";
import { Cloth } from "../../../db/models/cloth";

export const getAllUsers = async () => {
    const users = await User.find().populate('cart').populate('favorites');
    return users;
};

export const getUser = async (email: LooseObject) => {
    const user = await User.findOne(email).populate('cart').populate('favorites');
    if(!user) {
        throw new Error('no such email');
    }
    return user;
}

export const getUserCart = async (user: LooseObject) => {
    const cart = await User.findOne(user).populate('cart').select('cart');
    return cart;
};

export const addToCart = async (email: string, clothName: string, clothSize: string, clothColor: string) => {
    const user = await User.findOne({email: email}).populate('cart').select('cart');
    const cloth = await Cloth.findOne({name: clothName, color: clothColor, size: clothSize});
    if(cloth) {
        await Cart.updateOne(user?.cart,{ $push: { clothes: cloth._id } });
    }
    return true;
};

export const getCart = async (email: string) => {
    const user = await User.findOne({email: email});
    const cart = await Cart.findOne({_id: user?.cart}).populate('clothes');
    //return cart?.clothes;
    return cart;
};

export const createUser = async (user: IUser) => {
    let created;
    try {
        const newUser = new User(user);
        created = await newUser.save();

        if(created) {
            await createCart(user);
        }
    }
    catch(err) {
        console.log(err)
        return err;
    }

    return true;
};

export const updateUser = async (email: LooseObject, newDetails: LooseObject) => {
    let result;
    try {
        result = await User.updateOne(email, newDetails);
    }
    catch(err) {
        throw err;
    }
    return result;
};

export const login = async (email: string, password: string) => {
    const user = await User.findOne({email: email});
    if (user?.password === password) {
        return {name: user?.username};
    } 
    return undefined;
};