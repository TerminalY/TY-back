import { watchFile } from "fs";
import { IUser } from "../../../db/models/user";
import { LooseObject } from "../../../utils/models";
import * as provider from "../providers/users-data-provider";

export const getUser = async (userFilter: LooseObject) => {
    return await provider.getUser(userFilter);
}
export const getUserCart = async (user: IUser) => {
    return await provider.getUserCart(user);
};

export const createUser = async (user: IUser) => {
    return await provider.createUser(user);
};