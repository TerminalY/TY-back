import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    userName: String,
    type: String
});

export interface IUser {
    userName: String;
    type: String;
}

export const Cloth = mongoose.model('Clothes', usersSchema);


