import mongoose from 'mongoose';

/**
 * Represents a user within the system.
 *
 * @typedef {Object} UserVerificationToken
 * @property {mongoose.Schema.Types.ObjectId} userId - Reference to the user (User collection's _id).
 * @otp {string} verificationStatus - otp is keep verification token.
 * @property {string} verificationStatus - The status of the email and phone verification process.
 * @property {string} verificationType - The type of verification being performed (e.g., email or phone).
 * @property {Date | null} emailVerifiedAt - Timestamp of when the email was verified.
 * @property {Date | null} phoneVerifiedAt - Timestamp of when the phone was verified.
 */
interface UserVerificationToken extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId; // Reference to the User collection
    verificationStatus: 'unverified' | 'pending' | 'verified'; // Represents overall status
    emailVerificationStatus: 'unverified' | 'pending' | 'verified'; // Email verification status
    phoneVerificationStatus: 'unverified' | 'pending' | 'verified'; // Phone verification status
    otp: string; // OTP for verification
    expireTime: Date; // Expiry time as a Date (60 minutes from now)
    emailVerifiedAt: Date | null; // Email verification timestamp
    phoneVerifiedAt: Date | null; // Phone verification timestamp
}

const userVerificationTokenSchema = new mongoose.Schema<UserVerificationToken>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
            unique: true, // Ensures one profile per user
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
        verificationStatus: {
            type: String,
            enum: ['unverified', 'pending', 'verified'],
            default: 'unverified',
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
        emailVerifiedAt: {
            type: Date,
            default: null,
        },
        phoneVerifiedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Create model
const UserVerificationToken = mongoose.model<IUser>(
    'UserVerificationToken',
    userVerificationTokenSchema
);

export { UserVerificationToken };
