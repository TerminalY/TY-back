import mongoose from 'mongoose'
import { ICloth } from './cloth';

const cartSchema = new mongoose.Schema({
    clothes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clothes'
    }]
});

export interface ICart {
    clothes?: ICloth[];
}

export const Cart = mongoose.model('Carts', cartSchema);


