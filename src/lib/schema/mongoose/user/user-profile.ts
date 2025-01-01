import mongoose from 'mongoose';

/**
 * Represents a user's profile within the system.
 *
 * @typedef {Object} IUserProfile
 * @property {mongoose.Schema.Types.ObjectId} userId - Reference to the user (User collection's _id).
 * @property {string} fullName - Full name of the user.
 * @property {string} bio - Short biography of the user.
 * @property {string | null} picture - URL of the user's profile picture.
 * @property {Object} address - Address object containing street, city, state, and zip.
 * @property {string} address.street - Street address.
 * @property {string} address.city - City of the user.
 * @property {string} address.state - State of the user.
 * @property {string} address.zip - Zip code.
 */
interface IUserProfile extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId; // Reference to the User collection
    bio: string;
    picture?: string | null; // Optional profile picture URL
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

const userProfileSchema = new mongoose.Schema<IUserProfile>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
            unique: true, // Ensures one profile per user
        },

        bio: {
            type: String,
            maxlength: 250,
            default: '',
        },
        picture: {
            type: String,
            default: null, // Profile picture URL (optional)
        },
        address: {
            street: { type: String, default: null },
            city: { type: String, default: null },
            state: { type: String, default: null },
            zip: { type: String, default: null },
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Create the UserProfile model
const UserProfile = mongoose.model<IUserProfile>(
    'UserProfile',
    userProfileSchema
);

export { UserProfile };
