import * as provider from "../providers/clothes-provider";
import { ICloth, ParsedCloth } from '../../../db/models/cloth';
import { cloth, LooseObject } from "../../../utils/models";
import { toArray } from "../../../utils/index";
import { Request } from 'express';

export const getCloth = async (params: any) => {
    let filter: LooseObject = {};
    let paging: LooseObject = {};
    let retClothes: ParsedCloth[] = [];
    // Init filter options if required
    if(params.minPrice || params.maxPrice) {
        filter.price = {};
    }
    if(params.size) {
        filter.size = {};
    }

    if (params.color) {
        filter.color = {};
    }

    // Regex for /name/ is like *name*
    params.name     ? filter.name   = { $regex: '.*' + params.name + '.*', $options: 'i' } : undefined;
    params.color    ? filter.color!.$in  = toArray(params.color) : undefined;
    params.type     ? filter.type   = params.type : undefined;
    params.subtype  ? filter.subtype   = params.subtype : undefined;
    params.gender   ? filter.gender = params.gender : undefined;
    params.stock    ? filter.stock  = params.stock : undefined;

    // Paging
    params.pageSize ? paging.pageSize = Number(params.pageSize) : paging.pageSize = 500;
    params.pageNum  ? paging.pageNum  = Number(params.pageNum) : paging.pageNum = 0;

    // ranges filter
    params.size     ? filter.size!.$in   = toArray(params.size) : undefined;
    params.minPrice ? filter.price!.$gte = Number(params.minPrice) : undefined;
    params.maxPrice ? filter.price!.$lte = Number(params.maxPrice) : undefined;

    // Group clothes into a single array that contains all of the sizes, colors and stock
    (await provider.getClothes(filter,paging)).forEach(clothDoc => {
        // Bind basic properties
        let parsedCloth: ParsedCloth = {
            name : clothDoc._id,
            type : clothDoc.clothes[0].type,
            subtype : clothDoc.clothes[0].subtype,
            price : clothDoc.clothes[0].price,
            company: clothDoc.clothes[0].company,
            img : clothDoc.clothes[0].img,
            gender : clothDoc.clothes[0].gender,
            properties: {}
        };

        // Go over each cloth and save the size and amount per color
        clothDoc.clothes.forEach(cloth => {
            if(parsedCloth.properties && cloth.color && cloth.size && cloth.stock) {
                if(!parsedCloth.properties[cloth.color]) {
                    parsedCloth.properties[cloth.color] = [];
                }
                parsedCloth.properties[cloth.color].push([cloth.size,cloth.stock]);
            }
        });
        retClothes.push(parsedCloth);
    });
    
    return retClothes;
}

export const createCloth = async (req: Request) => {
    // Build cloth object for query
    const cloth: ICloth = { name: req.body.desc,
        color: req.body.color,
        price: req.body.price,
        size: req.body.size,
        type: req.body.type,
        subtype: req.body.subtype,
        stock: req.body.stock,
        gender: req.body.gender,
        img: req.body.image,
        company: req.body.company
    }
    return await provider.createCloth(cloth);
}

export const updateCloth = async (clothParams: LooseObject, amount: number) => {
    return await provider.updateCloth(clothParams, amount);
}

export const deleteCloth = async (id: any) => {
    return provider.deleteCloth(id);
}

export const getClothAdmin = async (params: any) => {
    let paging: LooseObject = {};
    let retClothes: ICloth[] = [];
    let name: any;
    // Init filter options if required
   
    params.name     ? name   = { $regex: '.*' + params.name + '.*', $options: 'i' } : undefined;

    // Paging
    params.pageSize ? paging.pageSize = Number(params.pageSize) : paging.pageSize = 500;
    params.pageNum  ? paging.pageNum  = Number(params.pageNum) : paging.pageNum = 0;


    // Group clothes into a single array that contains all of the sizes, colors and stock
    return await provider.getClothesAdmin(paging, name);
   
}