import { model, Schema, Document } from 'mongoose';

export interface IProductDocument extends Document {
  image: string;
  title: string;
  price: string;
  city: string;
  createdAt: Date;
}
const productSchema = new Schema<IProductDocument>(
  {
    image: { type: String },
    title: { type: String },
    price: { type: String },
    city: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default model('Product', productSchema);
