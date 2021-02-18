import mongoose, {Types} from 'mongoose';
import { ICloth } from './cloth';

const orderSchema = new mongoose.Schema({
    email: {type : String, required : true},
    date: Number,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}],
    price: Number,
    address: String
});

// Interface for pushing data to db
export interface IOrder {
    email: string,
    date: number,
    items?: ICloth[],
    price: number,
    address?: string
}

// Interface for pulling data from db
export interface OrderDocument extends IOrder, mongoose.Document {
}

export const Order = mongoose.model<OrderDocument>('Orders', orderSchema);


