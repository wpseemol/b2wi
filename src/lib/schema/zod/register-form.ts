import { z } from 'zod';

export const registerForm = z.object({
    fullName: z.string().min(2, {
        message: 'Full Name is required. Please enter your full name.',
    }),
    email: z.string().min(2, {
        message: 'Email is required. Please enter a valid email address.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long.',
    }),
});
