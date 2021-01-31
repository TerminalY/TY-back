import mongoose, {Types} from 'mongoose';

const clothesSchema = new mongoose.Schema({
    email: String,
    date: Date,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}],
    price: Number,
    address: String
});

// Interface for pushing data to db
export interface IOrder {
    email?: string,
    date?: Date,
    items?: Types.ObjectId[],
    price?: number,
    address?: string
}

// Interface for pulling data from db
export interface OrderDocument extends IOrder, mongoose.Document {
}

export const Order = mongoose.model<OrderDocument>('Orders', clothesSchema);


