import mongoose from 'mongoose'

const clothesSchema = new mongoose.Schema({
    name: { type: String,
            unique: true
    },
    type: String,
    size: Array,
    price: Number,
    colors: Array,
    amount: Number
});

export interface ICloth {
    name: string;
    type: string;
    size: string[];
    price: Number;
    colors: string[];
    amount: Number;
}

export const Cloth = mongoose.model('Clothes', clothesSchema);


