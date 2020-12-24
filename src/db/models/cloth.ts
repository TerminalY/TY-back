import mongoose from 'mongoose'

const clothesSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: Array,
    price: Number,
    color: String,
    amount: Number,
    gender: String,
    img: String
});

export interface ICloth {
    type: string;
    size: string[];
    price: Number;
    colors: string[];
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


