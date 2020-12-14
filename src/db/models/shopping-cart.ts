import mongoose from 'mongoose'
import { IUser } from './user';
import { ICloth } from './cloth';

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    clothes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clothes'
    }]
});

export interface ICart {
    user: IUser;
    clothes: ICloth[];
}

export const Cloth = mongoose.model('Clothes', cartSchema);

