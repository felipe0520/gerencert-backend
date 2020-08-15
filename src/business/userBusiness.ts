import { UserDataBase } from "../database/userDataBase";
import User from "../model/user";
import { VerifyUser } from "./verifyUser";

export interface InterfaceUserBusiness {
  fullName: string;
  cpf: string;
  birthday: string;
  contact: {
    email: string;
    phone: string;
  };
  status: boolean | string;
}

export class UserBusiness {
  constructor(private verifyUser: VerifyUser) {}
  async getUsers() {
    return await new UserDataBase().getUsers();
  }

  async createUser(userData: InterfaceUserBusiness) {
    const newUser = new User(userData);
    const verify = this.verifyUser;

    verify.dataUser(newUser);
    verify.name(newUser);
    verify.phone(newUser);
    verify.birthday(newUser);
    verify.cpf(newUser);
    verify.email(newUser);

    let existentUser = await new UserDataBase().getUserByCPF(newUser);

    if (existentUser.length > 0) {
      throw new Error("cpf already registered in the database");
    }

    existentUser = await new UserDataBase().getUserByEmail(newUser);

    if (existentUser.length > 0) {
      throw new Error("email already registered in the database");
    }

    await new UserDataBase().getUserByEmail(newUser);

    return await new UserDataBase().createUser(newUser);
  }

  async removeUserById(id: string) {
    const response = await new UserDataBase().removeUserById(id);

    if (response === null) {
      throw new Error("id does not exist in database");
    }

    return `user ${response.fullName} successfully deleted`;
  }

  async getUserById(id: string) {
    const response = await new UserDataBase().getUserById(id);

    if (response === null) {
      throw new Error("id does not exist in database");
    }

    return response;
  }

  async updateUserById(id: string, userData: InterfaceUserBusiness) {
    const verify = this.verifyUser;
    const updateUser = { ...userData, _id: id };
    verify.dataUser(userData);
    verify.name(userData);
    verify.phone(userData);
    verify.birthday(userData);
    verify.cpf(userData);
    verify.email(userData);

    return await new UserDataBase().updateUserById(id, updateUser);
  }
}
