import { InterfaceUserBusiness } from "./userBusiness";

export class VerifyUser {
  dataUser(dataUser: InterfaceUserBusiness) {
    if (
      !dataUser.fullName ||
      !dataUser.cpf ||
      !dataUser.contact.email ||
      !dataUser.contact.phone ||
      !dataUser.birthday
    ) {
      throw new Error("invalid data user");
    }
  }
  name(dataUser: InterfaceUserBusiness) {
    if (dataUser.fullName.length < 10) {
      throw new Error("propriety fullName as have min length 10");
    }

    if (dataUser.fullName.length > 40) {
      throw new Error("propriety fullName as have max length 40");
    }
  }

  cpf(dataUser: InterfaceUserBusiness) {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (dataUser.cpf.match(regex)) {
      return;
    }
    throw new Error("Format cpf is invalid");
  }

  email(dataUser: InterfaceUserBusiness) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (dataUser.contact.email.match(regex)) {
      return;
    }
    throw new Error("Format email is invalid");
  }

  phone(dataUser: InterfaceUserBusiness) {
    const regex = /^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/;

    if (dataUser.contact.phone.match(regex)) {
      return;
    }
    throw new Error("Format phone is invalid");
  }

  birthday(dataUser: InterfaceUserBusiness) {
    return;
    // falta implementar verificação de data
  }
}
