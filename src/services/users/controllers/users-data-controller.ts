import { Request } from "express";
import { IUser } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import * as provider from "../providers/users-data-provider";

export const getAllUsers = async (req: any) => {
    let name: any;
    req.name     ? name   = { $regex: '.*' + req.name + '.*', $options: 'i' } : undefined;
    return await provider.getAllUsers(name);
}

export const getUser = async (email: LooseObject) => {
    return await provider.getUser(email);
}

export const getUserCart = async (user: IUser) => {
    return await provider.getUserCart(user);
};

export const addToCart = async (email: string,  clothName: string, clothSize: string, clothColor: string) => {
    return await provider.addToCart(email, clothName, clothSize, clothColor);
};

export const getCart = async (email: string) => {
    let cart = await provider.getCart(email);
    let sum:number | undefined = 0;
    if (cart?.clothes && cart.clothes.length > 0) {
// Map reduce to get the total price of cart (sum = 0 if undefined)
     sum = cart?.clothes?.map(cloth => cloth.price).reduce((sum = 0, price = 0)=> sum + price);
    } 
    

    return {cart, sum};
};

export const createUser = async (username: string, email: string, password: string) => {
    let user: IUser = {username: username, email: email, password: password, type: 'user', cart: undefined};
    return await provider.createUser(user);
};

export const deleteUser = async (id) => {
    return provider.deleteUser(id);
};

export const updateUser = async (username: LooseObject, updateData: LooseObject) => {
    return await provider.updateUser(username, updateData);
};

export const login = async (email: string, password: string) => {
    return await provider.login(email, password);
};