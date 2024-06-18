import mongoose, { ObjectId, Schema } from "mongoose";

// Define the enum for cart status
const cartStatusEnum = ["active", "completed"];
export interface ICartItem {
  productId: ObjectId;
  quantity?: number;
  unitPrice: number;
}

export interface ICart extends Document {
  userId: ObjectId;
  items: ICartItem[];
  totalAmount?: number;
  status?: "active" | "completed";
}

// Cart item schema
const cartItemSchema: Schema = new Schema<ICartItem>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, default: 1 },
  unitPrice: { type: Number, required: true },
});

// Cart schema
const cartSchema = new Schema<ICart>({
  userId: { type: Schema.Types.ObjectId, required: true },
  items: [cartItemSchema],
  totalAmount: { type: Number, required: true, default: 0 },
  status: { type: String, enum: cartStatusEnum, default: "active" },
});

export const cartModel = mongoose.model<ICart>("Cart", cartSchema);
