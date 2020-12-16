import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';
import { toArray } from "../../../utils";

<<<<<<< Updated upstream
export const getCloth = async (params: any) => {
    let filter: ICloth = {}
=======
<<<<<<< Updated upstream
export const getCloth = async () => {
    return await provider.getClothes();
=======
export const getCloth = async (params: any) => {
    let filter: ICloth = {};
>>>>>>> Stashed changes
    params.color ? filter.colors = toArray(params.colors) : undefined;
    params.price ? filter.price = Number(params.price) : undefined;
    params.size ? filter.size = toArray(params.size) : undefined;
    params.type ? filter.type = params.type : undefined;
    console.log(filter)
    return await provider.getClothes(filter);
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}