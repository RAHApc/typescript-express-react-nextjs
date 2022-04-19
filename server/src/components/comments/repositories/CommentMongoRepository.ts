import { FilterQuery, UpdateQuery } from "mongoose";
import ICommentRepository from "./ICommentRepository";
import IComment from "../model/IComment";
import CommentModel from "./../model/Comment";
import CommentStatus from "../model/CommentStatus";
import IPagination from './../../../../../shop-admin/src/components/contracts/IPagination';
import ObjectInterface from './../../contracts/ObjectInterface';
import IUserRepository from './../../users/repositories/IUserRepository';
import UserMongoRepository from './../../users/repositories/UserMongoRepository';
import IUser from './../../users/model/IUser';


export default class CommentMongoRepository implements ICommentRepository {

    private readonly userRepository: IUserRepository
    constructor() {
        this.userRepository = new UserMongoRepository()
    }

    public async findOne(ID: string): Promise<IComment | null> {
        return CommentModel.findById(ID);
    }

    public async findMany(params: ObjectInterface, relations?: string[], pagination?: IPagination): Promise<IComment[]> {
        const commentQueryParams: ObjectInterface = {}
        if (params.user) {
            const users = await this.userRepository.findMany({
                $or: [
                    { firstName: { $regex: params.user } },
                    { lastName: { $regex: params.user } },
                    { email: { $regex: params.user } }
                ]
            })
            commentQueryParams.user = { $in: users.map((user: IUser) => user._id) }
        }
        const commentQuery = CommentModel.find(commentQueryParams)
        if (relations && relations.length > 0) {
            relations.forEach((relation: string) => {
                commentQuery.populate(relation)
            })
        }
        if (pagination) {
            commentQuery.limit(pagination.perPage).skip(pagination.offset)
        }
        return commentQuery.exec()
    }

    public async findByProduct(productID: string, relations?: string[]): Promise<IComment[]> {
        const commentQuery = CommentModel.find({ product: productID });
        if (relations && relations.length > 0) {
            relations.forEach((relation: string) => {
                commentQuery.populate(relation);
            })
        }

        return commentQuery.exec();
    }

    public async create(params: any): Promise<IComment> {
        const newProduct = new CommentModel({ ...params });
        return newProduct.save();
    }

    public async updateOne(where: FilterQuery<Partial<IComment>>, updateDate: UpdateQuery<Partial<IComment>>) {
        return CommentModel.updateOne(where, updateDate);
    }

    public async updateMany(where: any, updateDate: any): Promise<any> {

    }

    public async deleteOne(where: any): Promise<any> {

    }

    public async deleteMany(where: any): Promise<any> {

    }

}
