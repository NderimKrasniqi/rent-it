import { User } from '../users/users.model';
import { Response, Request } from 'express';
import Product from './products.model';

const getProducts = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate('products');
  res.json(user?.products);
};
const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

const createProduct = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const product = new Product(req.body);
  const result = await product.save();
  await User.findByIdAndUpdate(userId, { $push: { products: product._id } });

  res.status(201).json(result);
};

const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(product);
};

const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  await User.findByIdAndUpdate(req.params.userId, {
    $pull: { products: product?._id },
  });
  res.status(200).json(product);
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
