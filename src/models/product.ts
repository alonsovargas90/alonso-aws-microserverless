import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  images: string[];
  price: number;
  category: Types.ObjectId;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: {  type: [String], required: false },
    price: { type: Number, required: true },
    category: { type: Types.ObjectId, ref: 'Category', required: true },
});

export const ProductModel = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);