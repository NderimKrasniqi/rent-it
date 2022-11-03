import { isValidObjectId } from 'mongoose';
import * as z from 'zod';
const userParam = z.object({
  userId: z.string().refine((id) => isValidObjectId(id), {
    message: 'Invalid product userId',
  }),
});

export { userParam };
