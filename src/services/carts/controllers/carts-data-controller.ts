import { Request } from 'express';
import { ICloth } from '../../../db/models/cloth';
import { IUser, UserDocument } from '../../../db/models/user';
import * as provider from '../providers/carts-data-provider';

export const createCart = async (user: IUser) => {
    return await provider.createCart(user);
}

export const order = async (email: string, address: string) => {
    return await provider.order(email, address);
}

export const getAllOrders = async () => {
    return await provider.getAllOrders();
}

export const deleteItemInCart = async (req: Request) => {
    const cloth: ICloth = {color : req.body.color, size : req.body.size, name: req.body.name};
    return await provider.deleteItemInCart(req.body.email, cloth);
};