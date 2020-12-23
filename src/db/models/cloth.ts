import mongoose from 'mongoose';
import { IMongoConditions } from '../../utils/models';

const clothesSchema = new mongoose.Schema({
    name: { type: String,
            unique: true
    },
    type: String,
    size: String,
    price: Number,
    colors: String,
    amount: Number,
    gender: String,
    img: String
});

// name type    size    price   colors  amount  gender  img


export interface ICloth {
    name?: string;
    type?: string;
    size?: string;
    price?: Number;
    color?: string;
    amount?: Number;
    gender?: string;
    img?: string;
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


