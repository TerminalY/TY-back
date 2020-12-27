import mongoose, { Types } from 'mongoose'

const usersSchema = new mongoose.Schema({
    firstName:  { type: String, required: true },
    lastName:     String,
    userName:   { type: String, unique: true, required: true },
    password:   { type: String, required: true },
    type:         String,
    gender:     { type: String, enum: ['men', 'women'],
                  default: 'men', required: true },
    cart:       { type: mongoose.Schema.Types.ObjectId, ref: 'Carts' },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]
});

export interface IUser  {
    firstName: string;
    lastName?: string;
    userName: string;
    password: string;
    type?: string;
    gender: string;
    cart?: Types.ObjectId;
    favorites?: Types.ObjectId[];
}

// Interface for pulling data from db
export interface UserDocument extends IUser, mongoose.Document {
}


export const User = mongoose.model<UserDocument>('Users', usersSchema);


