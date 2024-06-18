import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IOrderItem extends Document {
    name: string;
    quantity: number;
    unitPrice: number;
    image: string;
}
export interface IOrder extends Document {
    userId: ObjectId;
    cartId: ObjectId;
    items: IOrderItem[];
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    status: 'pending' | 'completed' | 'cancelled';
}

const orderItemSchema: Schema = new Schema<IOrderItem>({
    image: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
});

const orderSchema: Schema = new Schema<IOrder>({
    userId: { type: Schema.Types.ObjectId, required: true },
    cartId: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
    items: [orderItemSchema],
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

export const orderItemModel = mongoose.model<IOrderItem>('OrderItem', orderItemSchema);
const orderModel = mongoose.model<IOrder>('Order', orderSchema);

export default orderModel;