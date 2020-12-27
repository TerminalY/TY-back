import mongoose, { Types } from 'mongoose'
import { ICloth } from './cloth';

const cartSchema = new mongoose.Schema({
    clothes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clothes'
    }]
});

// Interface for pushing data to db
export interface ICart {
    clothes?: ICloth[];
}

// Interface for pulling data from db
export interface CartDocument extends ICart, mongoose.Document {
}

export const Cart = mongoose.model<CartDocument>('Carts', cartSchema);


