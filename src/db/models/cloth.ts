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
    name?: string;
    type?: string;
    size?: string[];
    price?: Number;
    color?: string;
    amount?: Number;
    gender?: string;
    img?: string;
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


