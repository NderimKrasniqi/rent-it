import { model, Schema, Document, Types, Model } from 'mongoose';
import { ProductInput } from './product.validate';

interface IProductDocument extends Document {
  image: string;
  title: string;
  price: string;
  city: string;
  user: Types.ObjectId;
}

interface ProductModel extends Model<IProductDocument> {
  insertOne(properties: ProductInput): IProductDocument;
}

const ProductSchema = new Schema<IProductDocument>(
  {
    image: { type: String },
    title: { type: String },
    price: { type: String },
    city: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

ProductSchema.statics.insertOne = (args: ProductInput) => new Product(args);

const Product = model<IProductDocument, ProductModel>('Product', ProductSchema);

export { Product, IProductDocument };
