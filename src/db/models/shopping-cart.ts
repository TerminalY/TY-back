import mongoose, { MapReduceOptions, Types } from 'mongoose';
import { ClothDocument } from './cloth';

declare function emit(k);

const cartSchema = new mongoose.Schema({
    clothes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]
});

// Interface for pushing data to db
export interface ICart {
    clothes?: Types.ObjectId[];
}

// Interface for pulling data from db
export interface CartDocument extends ICart, mongoose.Document {
}

export const Cart = mongoose.model<CartDocument>('Carts', cartSchema);

/*let options: mongoose.MapReduceOptions<CartDocument, any, any> = {
    map: function map(item) {
        emit(item.clothes);
    },
    reduce: (key, values) => {
        return values;
    },
    out: { replace: "map_reduce_prices" },
    verbose: true
};
Cart.mapReduce(options); */
