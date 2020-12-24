import { Cloth, ICloth } from '../../../db/models/cloth';
import { LooseObject } from '../../../utils/models';

export const getClothes = async (filter: LooseObject) => {
    const a = await Cloth.find(filter);
    console.log(a)
    return a;

};

export const createCloth = async (cloth: ICloth) => {
    const clothObject = new Cloth(cloth);
    
    const res = await clothObject.save((error, document) => {
        if(!error) {
            return true;
        }
        return false;
    })

    return res;
}