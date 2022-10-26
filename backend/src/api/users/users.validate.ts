import * as z from 'zod';
const userParam = z.object({
  userId: z.string(),
});

export { userParam };
