import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Your email is invalid' }),
  password: z
    .string()
    .min(8, { message: 'Your password must contain at least 8 characters' })
    .max(32, { message: 'Your password must contain less than 33 characters' }),
});
