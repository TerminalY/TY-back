import { IUser, UserDocument, User } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import { createCart } from '../../carts/controllers/carts-data-controller'

export const getUser = async (userFilter: LooseObject) => {
    const user = User.findOne(userFilter).populate('cart');
    return user;
}
export const getUserCart = async (user: IUser) => {
    const cart = User.findOne(user).populate('cart').select('cart');
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
        return false;
    }

    return true;
};