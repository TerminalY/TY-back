import { Cloth, ICloth } from '../../../db/models/cloth';

export const getClothes = async (filter: ICloth) => {
    const a = await Cloth.find(filter);
    return a;

};

export const createCloth = async (cloth: ICloth) => {
    const clothObject = new Cloth(cloth);
    
    const res = await clothObject.save((error, document) => {
        if(error) {
            return false;
        }
        console.log(document)
        return true;
    });

    return res;
}