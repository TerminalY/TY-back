import * as provider from "../providers/clothes-provider";

export const getClothes = (type: string) => {
    return provider.getClothes(type);
}