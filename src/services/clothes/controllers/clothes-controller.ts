import * as provider from "../providers/clothes-provider";
import { ICloth } from '../../../db/models/cloth';
import { LooseObject } from "../../../utils/models";
import { toArray } from "../../../utils/index";

export const getCloth = async (params: any) => {
    let filter: LooseObject = {};
    
    // Init filter options if required
    if(params.minPrice || params.maxPrice) {
        filter.price = {};
    }
    if(params.size) {
        filter.size = {};
    }

    // Regex for /name/ is like *name*
    params.name     ? filter.name   = '/' + params.name + '/' : undefined;
    params.color    ? filter.color  = params.color : undefined;
    params.type     ? filter.type   = params.type : undefined;
    params.gender   ? filter.gender = params.gender : undefined;
    params.amount   ? filter.amount = params.amount : undefined;

    params.size     ? filter.size!.$in   = toArray(params.size) : undefined;
    params.minPrice ? filter.price!.$gte = params.minPrice : undefined;
    params.maxPrice ? filter.price!.$lte = params.maxPrice : undefined;

    return await provider.getClothes(filter);
}

export const createCloth = async (cloth: ICloth) => {
    return await provider.createCloth(cloth);
}