import IPagination from "./IPagination";

export default interface IRepository<T> {
    findOne(ID: string, relations?: string[]): Promise<T | null>;
    findMany(params: any, relations?: string[], pagination?: IPagination): Promise<T[]>;
    create(params: any): Promise<T>;
    updateOne(where: Partial<T>, updateDate: Partial<T>): Promise<any>;
    updateMany(where: Partial<T>, updateDate: Partial<T>): Promise<boolean>;
    deleteOne(ID: string): Promise<boolean>;
    deleteMany(where: any): Promise<boolean>;
    // count(params: any): Promise<number>;
}