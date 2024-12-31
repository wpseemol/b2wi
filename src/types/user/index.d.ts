/**
 * Represents a user within the system.
 *
 * @typedef {Object} UserType
 * @property {string} id - The unique identifier for the user.
 * @property {string} username - The unique username of the user.
 * @property {string} email - The email address of the user.
 * @property {RoleType} role - The role assigned to the user (e.g., student, admin, super-admin).
 * @property {Date | null} [registerAt] - The registration date of the user. Optional, defaults to `null` if not provided.
 * @property {Date | null} [lastLogin] - The timestamp of the user's last login. Optional, defaults to `null` if not provided.
 */
export type UserType = {
    id: string;
    username: string;
    email: string;
    phone: string | null;
    role: RoleType;
    registerAt?: Date | null;
    lastLogin?: Date | null;
};

export enum RoleType {
    Student = 'student',
    Admin = 'admin',
    SuperAdmin = 'super-admin',
}

export type UserProfileType = {
    id: string;
    fullName: string;
    picture: string | null;
    bio: string | null;
    address: AddressType | null;
    role: RoleType;
    registerAt?: Date | null;
    lastLogin?: Date | null;
};

export type AddressType = {
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
};
