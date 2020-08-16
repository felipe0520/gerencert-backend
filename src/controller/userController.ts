import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { VerifyUser } from "../business/verifyUser";
import { UserDataBase } from "../database/userDataBase";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const response = await new UserBusiness(new VerifyUser()).getUsers();

      res.status(200).send({ users: response });

      await new UserDataBase().destroyConnection();
    } catch (error) {
      res.status(400).send({ message: error.message });

      await new UserDataBase().destroyConnection();
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = req.body;
      const userData = {
        fullName: user.fullName,
        cpf: user.cpf,
        birthday: user.birthday,
        contact: {
          phone: user.contact.phone,
          email: user.contact.email,
        },
        status: user.status,
      };

      await new UserBusiness(new VerifyUser()).createUser(userData);

      new UserDataBase().destroyConnection();
      res.status(200).send("user created");
    } catch (error) {
      res.status(400).send({ message: error.message });

      await new UserDataBase().destroyConnection();
    }
  }

  async removeUserById(req: Request, res: Response) {
    try {
      const response = await new UserBusiness(new VerifyUser()).removeUserById(
        req.query.id as string
      );

      res.status(200).send(response);

      await new UserDataBase().destroyConnection();
    } catch (error) {
      res.status(400).send(error.message);

      await new UserDataBase().destroyConnection();
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const response = await new UserBusiness(new VerifyUser()).getUserById(
        req.query.id as string
      );

      res.status(200).send(response);

      await new UserDataBase().destroyConnection();
    } catch (error) {
      res.status(400).send(error.message);

      await new UserDataBase().destroyConnection();
    }
  }

  async updateUserById(req: Request, res: Response) {
    try {
      const user = req.body;
      const userData = {
        fullName: user.fullName,
        cpf: user.cpf,
        birthday: user.birthday,
        contact: {
          phone: user.contact.phone,
          email: user.contact.email,
        },
        status: user.status,
      };

      const response = await new UserBusiness(new VerifyUser()).updateUserById(
        req.query.id as string,
        userData
      );

      res
        .status(200)
        .send({ message: " User data updated successfully ", response });

      await new UserDataBase().destroyConnection();
    } catch (error) {
      res.status(400).send({ message: error.message });

      await new UserDataBase().destroyConnection();
    }
  }
}
