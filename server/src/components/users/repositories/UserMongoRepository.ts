import IUser from '../model/IUser'
import IUserRepository from '../repositories/IUserRepository'
import UserModel from '../model/User'
import { FilterQuery, UpdateQuery } from 'mongoose'
import { UpdateResult } from 'mongodb'
export default class UserMongoRepository implements IUserRepository {
  public async findOne (ID:string):Promise<IUser | null> {
    return UserModel.findById(ID)
  }

  public async findByEmail (email:string):Promise<IUser | null> {
    return UserModel.findOne({ email })
  }

  public async findMany (params:any):Promise<IUser[]> {
    return UserModel.find(params)
  }

  public async create (params:any):Promise<IUser> {
    const newUser = new UserModel({ ...params })
    await newUser.save()
    return newUser
  }

  public async updateOne (where:FilterQuery<Partial<IUser>>, updateData:UpdateQuery<Partial<IUser>>):Promise<any> {
    return UserModel.updateOne(where, updateData);
  }

  public async updateMany (where:any, updateData:any):Promise<any> {}
  public async deleteOne (where:any):Promise<any> {}
  public async deleteMany (where:any):Promise<any> {}
}
