import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  price: number;
  category?: string;
  stock: number;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, default: "other" },
    stock: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
