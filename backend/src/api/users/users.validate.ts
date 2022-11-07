import { isValidObjectId } from 'mongoose';
import * as z from 'zod';

const User = z.object({
  avatar: z.string().optional(),
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Email must be a valid email',
    }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }),
});

const userParam = z.object({
  userId: z.string().refine((id) => isValidObjectId(id), {
    message: 'Invalid userId',
  }),
});

type UserInput = z.infer<typeof User>;

const UserPartial = User.partial();

export { UserInput, User, userParam, UserPartial };
