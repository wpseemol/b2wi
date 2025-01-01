import { ReactNode } from 'react';

/**
 * Represents the structure of an email to be sent.
 */
export interface EmailInfoType {
    /**
     * The sender's email address.
     * Example: 'onboarding@resend.dev'
     */
    form: string;

    /**
     * The recipient's email address.
     * Example: 'wpseemol@gmail.com'
     */
    to: string;

    /**
     * The subject of the email.
     * Example: 'Hello World'
     */
    subject: string;

    /**
     * The content of the email as a ReactNode.
     * This allows rendering React components or raw HTML within the email.
     * Example: `<p>Congrats on sending your <strong>first email</strong>!</p>`
     */
    react: ReactNode;
}
