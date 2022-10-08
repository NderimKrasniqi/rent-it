import * as z from 'zod';

const authUser = z.object({
  avatar: z.string().optional(),
  name: z.string().optional(),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }),
});

type UserInput = z.infer<typeof authUser>;

export { authUser, UserInput };
