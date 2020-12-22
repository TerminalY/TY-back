import mongoose from 'mongoose';
import { mongoConditions } from '../../utils/models';

const clothesSchema = new mongoose.Schema({
    name: { type: String,
            unique: true
    },
    type: String,
    size: Array,
    price: Number,
    colors: Array,
    amount: Number,
    gender: String,
    img: String
});

export interface ICloth {
    name?: string;
    type?: string;
    size?: mongoConditions;
    price?: mongoConditions;
    color?: string;
    amount?: Number;
    gender?: string;
    img?: string;
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


