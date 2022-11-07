import { Model, model, Schema, Document } from 'mongoose';
import { UserInput } from './users.validate';
import { createHash } from '../../utils/hash';

// An interface that describes the properties
// that a User Document has
interface IUserDocument extends Document {
  avatar?: string;
  name?: string;
  email: string;
  password: string;
}
// An interface that describes the properties
// that a User Model has
interface UserModel extends Model<IUserDocument> {
  insertOne(properties: UserInput): IUserDocument;
}

const UserSchema = new Schema<IUserDocument>(
  {
    avatar: { type: String },
    name: { type: String },
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
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await createHash(this.get('password'));
    this.set('password', hashed);
  }
  next();
});

UserSchema.pre('remove', async function (next) {
  console.log('Products where removed');
  await this.$model('Product').deleteMany({ user: this._id });
  next();
});

UserSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

UserSchema.statics.insertOne = (args: UserInput) => new User(args);

const User = model<IUserDocument, UserModel>('User', UserSchema);

export { User, IUserDocument };
