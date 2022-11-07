import { User } from '../users/users.model';
import { Response, Request } from 'express';
import { Product } from './products.model';
import { BadRequestError } from '../../errors/bad-request-error';

const getProducts = async (req: Request, res: Response) => {
  let query;
  if (req.params.userId) {
    const { userId } = req.params;
    console.log(userId);
    query = await Product.find().where('user').equals(userId).populate({
      path: 'user',
      select: 'name email',
    });
  } else {
    query = await Product.find().populate({
      path: 'user',
      select: 'name email',
    });
  }
  res.status(200).json(query);
};

const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id).populate({
    path: 'user',
    select: 'name email',
  });
  if (!product) {
    throw new BadRequestError('Product was not found');
  }

  res.status(200).json(product);
};

const createProduct = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    throw new BadRequestError('User was not found');
  }
  const product = Product.insertOne({ ...req.body, user: userId });

  await product.save();

  res.status(201).json(product);
};

const updateProduct = async (req: Request, res: Response) => {
  const exist = await Product.findById(req.params.id);
  if (!exist) {
    throw new BadRequestError('Product was not found');
  }
  exist.set(req.body);
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(product);
};

const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new BadRequestError('Product was not found');
  }
  await product.remove();

  res.status(200).json({ message: 'Product was deleted' });
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
