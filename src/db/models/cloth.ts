import mongoose from 'mongoose'

const clothesSchema = new mongoose.Schema({
    type: String,
    size: Array,
    price: Number,
    colors: Array
});

export interface ICloth {
    type?: string;
    size?: string[];
    price?: Number;
    colors?: string[];
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


