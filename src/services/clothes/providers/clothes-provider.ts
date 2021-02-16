import { Cloth, ICloth } from '../../../db/models/cloth';

export const getClothes = async (filter: ICloth) => {
    return await Cloth.find(filter);
};
export const createCloth = async (cloth: ICloth) => {
    const clothObject = new Cloth(cloth);
    
    return await clothObject.save((error, document) => {
        if(error) {
            return false;
        }
        return true;
    });
}