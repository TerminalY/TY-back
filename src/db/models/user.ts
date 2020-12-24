import { ObjectId } from 'mongodb';
import mongoose from 'mongoose'
import { ICart } from './shopping-cart';

const usersSchema = new mongoose.Schema({
    _id: ObjectId,
    name: { type: String, 
                unique: true
            },
    type: String,
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carts'
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clothes'
    }]
});

export interface IUser {
    name?: String;
    type?: String;
    cart?: ICart;
}

export const User = mongoose.model('Users', usersSchema);


