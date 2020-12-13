import { Cloth, ICloth } from '../../../db/models/cloth';

export const getClothes = async () => {
    return await Cloth.find();
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