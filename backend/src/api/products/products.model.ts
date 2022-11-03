import { model, Schema, Document, Types } from 'mongoose';

export interface IProductDocument extends Document {
  image: string;
  title: string;
  price: string;
  city: string;
  createdAt: Date;
  user: Types.ObjectId;
}
const productSchema = new Schema<IProductDocument>(
  {
    image: { type: String },
    title: { type: String },
    price: { type: String },
    city: { type: String },
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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
