import mongoose, { Types } from 'mongoose'
import { IUser } from './user';
import { ICloth } from './cloth';
import { Type } from 'typescript';

const cartSchema = new mongoose.Schema({
    clothes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clothes'
    }]
});

export interface ICart {
    _id: Types.ObjectId;
    clothes?: ICloth[];
}

export const Cart = mongoose.model('Carts', cartSchema);


