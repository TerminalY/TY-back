import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';
import { toArray } from "../../../utils";


export const getCloth = async (params: any) => {
    let filter: ICloth = {};

    params.name ? filter.name = params.name : undefined;
    params.color ? filter.color = params.colors : undefined;
    params.price ? filter.price = Number(params.price) : undefined;
    params.size ? filter.size = toArray(params.size) : undefined;
    params.type ? filter.type = params.type : undefined;
    params.gender ? filter.gender = params.gender : undefined;

    return await provider.getClothes(filter);
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}