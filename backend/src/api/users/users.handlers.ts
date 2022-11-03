import { Response, Request } from 'express';
import { BadRequestError } from '../../errors/bad-request-error';
import { User } from '../users/users.model';

const getUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId).populate('products');
  if (!user) {
    throw new BadRequestError('User was not found');
  }
  return res.status(200).json(user);
};

const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
  });
  if (!user) {
    throw new BadRequestError('User was not found');
  }
  await user.save();
  return res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new BadRequestError('User was not found');
  }
  await user.remove();
  return res.status(200).json(user);
};

export { getUser, updateUser, deleteUser };
