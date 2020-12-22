// https://docs.mongodb.com/manual/reference/operator/query-comparison/

export interface mongoConditions {
    $eq?: any;
    $gt?: any;
    $gte?: any;
    $in?: any;
    $lt?: any;
    $lte?: any;
    $ne?: any;
    $nin?: any;
}