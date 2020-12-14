import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';
import { toArray } from "../../../utils";

export const getCloth = async (params: any) => {
    let filter: ICloth = {}
    params.color ? filter.colors = toArray(params.colors) : undefined;
    params.price ? filter.price = Number(params.price) : undefined;
    params.size ? filter.size = toArray(params.size) : undefined;
    params.type ? filter.type = params.type : undefined;
    console.log(filter)
    return await provider.getClothes(filter);
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}