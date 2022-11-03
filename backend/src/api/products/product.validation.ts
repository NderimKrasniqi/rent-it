import { ObjectId, isValidObjectId } from 'mongoose';
import * as z from 'zod';

const product = z.object({
  image: z.string({
    required_error: 'Image is required',
  }),
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  price: z.string({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a string',
  }),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string',
  }),
});

const productParam = z.object({
  id: z.string().refine((id) => isValidObjectId(id), {
    message: 'Invalid product id',
  }),
});

type ProductInput = z.infer<typeof product>;

export { product, productParam, ProductInput };
