import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';

export const getCloth = async () => {
    return await provider.getClothes();
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}