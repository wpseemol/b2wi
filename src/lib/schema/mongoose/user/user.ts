import { UserType } from '@/types/user';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

interface IUser extends UserType, mongoose.Document {
    comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 50,
            default: () => crypto.randomUUID(),
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        },
        phone: {
            type: String,
            required: false,
            unique: true,
            match: [
                /^\+?[1-9]\d{1,14}$/,
                'Please provide a valid phone number',
            ], // E.164 format
        },
        password: {
            type: String,
            required: false,
            minlength: 6,
            default: null,
            select: false, // Ensures the password is not returned in queries
        },

        role: {
            type: String,
            required: true,
            enum: ['student', 'admin', 'supper-admin'], // Restricted roles
            default: 'student',
        },
        registerAt: {
            type: Date,
            default: Date.now,
        },
        lastLogin: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (
    password: string
): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

// Create model
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export { User };
