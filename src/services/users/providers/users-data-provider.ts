import { IUser, User } from "../../../db/models/user";
import mongoose  from "mongoose";
import { LooseObject } from "../../../utils/models";
import { createCart } from '../../carts/controllers/carts-data-controller'
import { Cart } from "../../../db/models/shopping-cart";
import { Cloth } from "../../../db/models/cloth";

export const getAllUsers = async () => {
    const users = await User.find().populate('cart').populate('favorites');
};

export const getUser = async (username: LooseObject) => {
    const user = await User.findOne(username).populate('cart').populate('favorites');
    if(!user) {
        throw new Error('no such username');
    }
    return user;
}

export const getUserCart = async (user: LooseObject) => {
    const cart = await User.findOne(user).populate('cart').select('cart');
    return cart;
};

export const addToCart = async (username: LooseObject, clothName: string, clothSize: string, clothColor: string) => {
    const user = await User.findOne(username).populate('cart').select('cart');
    const cloth = await Cloth.findOne({name: clothName, color: clothColor, size: clothSize});
    if(cloth) {
        await Cart.updateOne(user?.cart,{ $push: { clothes: cloth._id } });
    }
    return true;
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

export const updateUser = async (username: LooseObject, newDetails: LooseObject) => {
    let result;
    try {
        result = await User.updateOne(username, newDetails);
    }
    catch(err) {
        throw err;
    }
    return result;
};