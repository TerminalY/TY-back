import mongoose from 'mongoose'

const clothesSchema = new mongoose.Schema({
    name: String,
    type: String,
    subtype: String,
    size: { type: String,
            enum: ['XS','S','M','L','XL','XXL']},
    company: String,
    price: Number,
    color: String,
    stock: Number,
    gender: String,
    img: String
});

// Interface for pushing data to db
export interface ICloth {
    name: string;
    type: string;
    subtype: string;
    price: number;
    company: string;
    gender?: string;
    size: string;
    color: string;
    stock: number;
    img: string;
}

// Interface for pulling data from db
export interface ClothDocument extends ICloth, mongoose.Document {
}

export interface ParsedCloth {
    name: string;
    type: string;
    subtype: string;
    price: Number;
    company: string;
    gender?: string;
    img?: string;
    properties: ClothProperties;
}
// color : [size, stock]
type ClothProperties = { [color: string]: [string, number][]}

// example
let a: ClothProperties = {
    'blue': [['L',150],['XL',15]]
}

export const Cloth = mongoose.model<ClothDocument>('Clothes', clothesSchema);


