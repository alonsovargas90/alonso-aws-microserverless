import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  image: string;
}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }
});

export const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);