import mongoose from 'mongoose'
import { ICart } from './shopping-cart';

const usersSchema = new mongoose.Schema({
    userName: { type: String, 
                unique: true
            },
    type: String,
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts'
    }
});

export interface IUser {
    userName?: String;
    type?: String;
    cart?: ICart;
}

export const Cloth = mongoose.model('Clothes', usersSchema);


