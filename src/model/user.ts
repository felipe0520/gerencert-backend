import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  cpf: string;
  birthday: string;
  contact: {
    email: string;
    phone: string;
  };
  status: boolean;
}

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
  },
  cpf: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  contact: {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export default model<IUser>("User", userSchema);
