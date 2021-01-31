import mongoose, { Types } from 'mongoose'

const usersSchema = new mongoose.Schema({
    username:   { type: String, required: true },
    password:   { type: String, required: true },
    type:         String,
    email:      { type: String, required: true, unique: true },
    cart:       { type: mongoose.Schema.Types.ObjectId, ref: 'Carts' },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]
});

export interface IUser  {
    username: string;
    password: string;
    email: string;
    type?: string;
    cart?: Types.ObjectId;
    favorites?: Types.ObjectId[];
}

// Interface for pulling data from db
export interface UserDocument extends IUser, mongoose.Document {
}


export const User = mongoose.model<UserDocument>('Users', usersSchema);


