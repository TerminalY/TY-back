import mongoose  from "mongoose";
import { IUser, UserDocument } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import * as provider from "../providers/users-data-provider";

export const getAllUsers = async () => {
    return await provider.getAllUsers();
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
    return await provider.getCart(email);
};

export const createUser = async (user: IUser) => {
    console.log(user)
    return await provider.createUser(user);
};

export const updateUser = async (username: LooseObject, updateData: LooseObject) => {
    return await provider.updateUser(username, updateData);
};

export const login = async (email: string, password: string) => {
    return await provider.login(email, password);
};