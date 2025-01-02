import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(2, {
            message: 'Email is required. Please enter a valid email address.',
        })
        .email('Invalid email address. Please enter a valid email address.'),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long.',
    }),
});
