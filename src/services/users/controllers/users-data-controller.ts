import mongoose  from "mongoose";
import { IUser, UserDocument } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import * as provider from "../providers/users-data-provider";

export const getAllUsers = async () => {
    return await provider.getAllUsers();
}

export const getUser = async (username: LooseObject) => {
    return await provider.getUser(username);
}

export const getUserCart = async (user: IUser) => {
    return await provider.getUserCart(user);
};

export const addToCart = async (username: string,  clothName: string, clothSize: string, clothColor: string) => {
    return await provider.addToCart(username, clothName, clothSize, clothColor);
};

export const createUser = async (user: IUser) => {
    console.log(user)
    return await provider.createUser(user);
};

export const updateUser = async (username: LooseObject, updateData: LooseObject) => {
    return await provider.updateUser(username, updateData);
};
