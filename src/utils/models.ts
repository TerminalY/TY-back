// https://docs.mongodb.com/manual/reference/operator/query-comparison/

export interface IMongoConditions {
    $eq?: any;
    $gt?: any;
    $gte?: any;
    $in?: any;
    $lt?: any;
    $lte?: any;
    $ne?: any;
    $nin?: any;
}

export type LooseObject = { [key:string] : any};