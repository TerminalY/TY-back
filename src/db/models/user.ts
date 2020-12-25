import { ObjectId } from 'mongodb';
import mongoose, { Types } from 'mongoose'
import { Type } from 'typescript';
import { ICart, Cart } from './shopping-cart';

const usersSchema = new mongoose.Schema({
    firstName:  { type: String, required: true },
    lastName:     String,
    userName:   { type: String, unique: true },
    password:   { type: String, required: true },
    type:         String,
    gender:     { type: Number, enum: [0, 1],
                  default: 0, required: true },
    cart:       { type: mongoose.Schema.Types.ObjectId, ref: 'Carts' },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clothes'}]
});

enum Gender {
    Male = 1,
    Female = 0
}

export interface IUser extends Document {
    firstName: string;
    lastName?: string;
    username: string;
    password: string;
    gender: Gender;
    cart: Types.ObjectId;
    favorites: Types.ObjectId[];
}

/**
 * Not directly exported because it is not recommanded to
 * use this interface direct unless necessary since the 
 * type of `company` field is not deterministic
 */
interface UserBaseDocument extends IUser, Document {
    favotires: Types.Array<string>;
    cart: Types.ObjectId;
    fullName: string;
    getGender(): string;
}

// Export this for strong typing
export interface UserDocument extends UserBaseDocument {
    cart: ICart["_id"];
}


export default mongoose.model('Users', usersSchema);


