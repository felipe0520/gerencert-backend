import { BaseDataBase } from "./baseDataBase";
import User, { IUser } from "../model/user";
import mongoose from "mongoose";
import { InterfaceUserBusiness } from "../business/userBusiness";

export class UserDataBase extends BaseDataBase {
  async getUsers() {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    return await User.find({});
  }

  async getUserByEmail(userData: IUser) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }

    return await User.find({
      "contact.email": `${userData.contact.email}`,
    });
  }

  async getUserById(id: string) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    return await User.findById(id);
  }

  async getUserByCPF(userData: IUser) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    return await User.find({ cpf: userData.cpf });
  }

  async createUser(newUser: IUser) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    await newUser.save();
  }

  async removeUserById(id: string) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    return await User.findOneAndDelete({
      _id: id,
    });
  }
  async updateUserById(id: string, updateUser: any) {
    if (mongoose.connection.readyState !== 1) {
      this.getConnection();
    }
    return User.findByIdAndUpdate(id, updateUser, { new: true });
  }
}
