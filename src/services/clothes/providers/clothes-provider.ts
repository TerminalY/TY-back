import { Aggregate } from 'mongoose';
import { Cloth, ICloth, ClothDocument } from '../../../db/models/cloth';
import { LooseObject } from '../../../utils/models';

type groupedCloth = {_id: string, clothes: ClothDocument[]};

export const getClothes = async (filter: LooseObject, paging: LooseObject) => {
    let res: Aggregate<groupedCloth[]> = Cloth.aggregate([
        {
            $match : filter 
        },
        // Group clothes by name into a single array that contains all of the sizes, colors and stock
        {
            $group: {
                _id: '$name',
                clothes: {
                     $push: { color: '$color', price: '$price', size: '$size', type: '$type', stock: '$stock', 
                              gender: '$gender', img:'$img', company: '$company', subType: '$subtype' } 
                },
            }
        },
        { 
            $sort: { '_id': 1 }
        },
        {
            $skip: paging.pageNum
        },
        {
            $limit: paging.pageSize
        }
    ]);
    
    return res;
};

export const createCloth = async (cloth: ICloth) => {
    const clothObject = new Cloth(cloth);
    
    return clothObject.save((error, document) => {
        if(error) {
            return false;
        }
        return true;
    });
}

export const updateCloth = async (clothParams: LooseObject, amount: number) => {
    return await Cloth.updateOne(clothParams, {stock: amount});
};

export const deleteCloth = async (id) => {
    return await Cloth.findByIdAndDelete(id);
};

export const getClothesAdmin = async (paging: LooseObject, name: string) => {
    let count = 0;
    let clothes = [{}]; 
    if (name !== undefined) {
         count = await Cloth.countDocuments({name: name});
         clothes = await Cloth.find({name: name}).skip(paging.pageSize * paging.pageNum).limit(paging.pageSize); 
    } else {
        count = await Cloth.countDocuments();
         clothes = await Cloth.find().skip(paging.pageSize * paging.pageNum).limit(paging.pageSize); 
    }
    
    return {count: count, clothes: clothes};
}