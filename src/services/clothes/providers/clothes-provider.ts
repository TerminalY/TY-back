import { Cloth, ICloth } from '../../../db/models/cloth';

export const getClothes = async () => {
    const a = await Cloth.find();
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