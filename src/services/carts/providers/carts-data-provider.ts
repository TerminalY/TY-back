import { Cart } from '../../../db/models/shopping-cart';
import { IUser, User } from '../../../db/models/user';
import { getCart } from '../../users/controllers/users-data-controller';
import { IOrder, Order } from '../../../db/models/orders';
import moment from 'moment';

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
        await Cart.updateOne({_id : cart.cart?._id}, {clothes: []});
        return true;
    }
    return false;
}

export const getAllOrders = async () => {
    let data : { [key:string]: number } = { };
    let finalData =[{}];
    const orders = await Order.find();
    orders.forEach(order => {
        let date = moment(order.date).format("MMM Do YY");
        data[date] ? data[date] += Math.round(order.price) : data[date] = Math.round(order.price); 
    });
finalData.pop();
    Object.keys(data).forEach(x=> {
        finalData.push({year: x, sales: data[x]});
    })   
    return finalData;
}

export const deleteItemInCart = async (email: string, id) => {
    const cart = await getCart(email);
    return await Cart.updateOne({_id : cart.cart?._id}, {$pull : {clothes: id}});
}