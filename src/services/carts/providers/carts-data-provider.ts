import { ICart, Cart, CartDocument } from '../../../db/models/shopping-cart';
import { IUser, UserDocument, User } from '../../../db/models/user';

export const createCart = async (user: IUser) => {
    let created
    try {
        const cart = new Cart(user);
        created = await cart.save();
        if(created) {
            await User.updateOne(user, {cart: cart._id});
        }
    }
    catch(err) {

    }
    return created;
}