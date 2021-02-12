import { Cart } from '../../../db/models/shopping-cart';
import { IUser, User } from '../../../db/models/user';
import { getCart } from '../../users/controllers/users-data-controller';
import { IOrder, Order } from '../../../db/models/orders';
import { Cloth, ICloth } from '../../../db/models/cloth';

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

export const order = async (email: string, address: string) => {
    const cart = await getCart(email);
    let order = new Order({email : email, date: Date.now(), items: cart.cart?.clothes, price : cart.sum, address : address})
    let created = await order.save();
    if(created) {
        Cart.updateOne({_id : cart.cart?._id}, {clothes: []});
        return true;
    }
    return false;
}

export const getAllOrders = async () => {
    return await Order.find();
}

export const deleteItemInCart = async (email: string, id) => {
    const cart = await getCart(email);
    return await Cart.updateOne({_id : cart.cart?._id}, {$pull : {clothes: id}});
}