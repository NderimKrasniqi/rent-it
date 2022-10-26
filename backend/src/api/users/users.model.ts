import { Model, model, Schema, Document, Types } from 'mongoose';
import { UserInput } from '../auth/auth.validation';
import { createHash } from '../../utils/hash';

// An interface that describes the properties
// that a User Document has
interface IUserDocument extends Document {
  avatar?: string;
  name?: string;
  products?: [Types.ObjectId];
  email: string;
  password: string;
}
// An interface that describes the properties
// that a User Model has
interface UserModel extends Model<IUserDocument> {
  insertOne(properties: UserInput): IUserDocument;
}

const userSchema = new Schema<IUserDocument>(
  {
    avatar: { type: String },
    name: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await createHash(this.get('password'));
    this.set('password', hashed);
  }
  next();
});
userSchema.statics.insertOne = (properties: UserInput) => new User(properties);

const User = model<IUserDocument, UserModel>('User', userSchema);

export { User, UserInput, IUserDocument };
