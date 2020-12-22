import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';
import { toArray } from "../../../utils";


export const getCloth = async (params: any) => {
    let filter: ICloth = {};

    // Init filter options if required
    if(params.lowPrice || params.highPrice) {
        filter.price = {};
    }
    if(params.size) {
        filter.size = {};
    }

    params.name      ? filter.name = params.name : undefined;
    params.color     ? filter.color = params.colors : undefined;
    params.type      ? filter.type = params.type : undefined;
    params.gender    ? filter.gender = params.gender : undefined;

    params.size      ? filter.size!.$in = toArray(params.size) : undefined;
    params.lowPrice  ? filter.price!.$gte = params.lowPrice : undefined;
    params.highPrice ? filter.price!.$lte = params.highPrice : undefined;

    return await provider.getClothes(filter);
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}