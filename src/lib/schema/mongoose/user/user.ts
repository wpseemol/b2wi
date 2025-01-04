import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    // Basic Information
    username: string; // Unique identifier, default is UUID
    fullName: string; // User name here
    email: string; // User email, validated and unique
    password: string | null; // Password, hashed, not returned in queries
    phone?: string | null; // Optional phone number in E.164 format

    // Verification Status
    emailVerificationStatus: 'unverified' | 'pending' | 'verified';
    phoneVerificationStatus: 'unverified' | 'pending' | 'verified';

    // OTP and Verification Details
    otp: string; // OTP for verification
    expireTime: Date; // OTP expiry timestamp
    emailVerifiedAt: Date | null; // Email verified timestamp
    phoneVerifiedAt: Date | null; // Phone verified timestamp

    // User Role
    role: 'student' | 'admin' | 'supper-admin'; // User role with default

    // Metadata
    registerAt: Date; // User registration timestamp
    lastLogin: Date | null; // Timestamp of last login

    // Mongoose Timestamps
    createdAt: Date; // Auto-generated timestamp
    updatedAt: Date; // Auto-generated timestamp
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
        fullName: {
            type: String,
            required: false,
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
            default: null,
        },
        password: {
            type: String,
            required: false,
            minlength: 6,
            default: null,
            select: false, // Ensures the password is not returned in queries
        },

        otp: {
            type: String,
            required: true, // Ensures OTP is provided
        },
        expireTime: {
            type: Date,
            required: true,
            default: () => {
                const now = new Date();
                now.setMinutes(now.getMinutes() + 60); // Add 60 minutes to current time
                return now;
            }, // Sets expiry time to 60 minutes from now
        },
        role: {
            type: String,
            required: true,
            enum: ['student', 'admin', 'supper-admin'], // Restricted roles
            default: 'student',
        },
        emailVerificationStatus: {
            type: String,
            enum: ['unverified', 'pending', 'verified'],
            default: 'unverified',
        },
        phoneVerificationStatus: {
            type: String,
            enum: ['unverified', 'pending', 'verified'],
            default: 'unverified',
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

// Create model
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export { User };
