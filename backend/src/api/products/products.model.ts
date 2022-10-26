import { timeStamp } from 'console';
import { model, Schema, Document } from 'mongoose';

export interface IProductDocument extends Document {
  image: string;
  title: string;
  price: number;
  city: string;
  createdAt: Date;
}
const productSchema = new Schema<IProductDocument>(
  {
    image: { type: String },
    title: { type: String },
    price: { type: Number },
    city: { type: String },
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
