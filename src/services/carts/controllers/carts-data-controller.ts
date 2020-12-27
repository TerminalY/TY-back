import { IUser, UserDocument } from '../../../db/models/user';
import * as provider from '../providers/carts-data-provider';

export const createCart = async (user: IUser) => {
    return await provider.createCart(user);
}