import { Schema, model, mongo } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  phone?: string;
  email: string;
  photo?: string;
  country: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: Schema.Types.String, required: true },
  lastName: { type: Schema.Types.String, required: true },
  userName: { type: Schema.Types.String, required: true, unique: true },
  phone: { type: Schema.Types.String },
  email: { type: Schema.Types.String, required: true, unique: true },
  photo: { type: Schema.Types.String },
  country: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
});

export const userModel = model<IUser>("User", userSchema);
