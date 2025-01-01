import { EmailInfoType } from '@/types/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmails(emailInfo?: EmailInfoType | null) {
    try {
        if (!emailInfo) {
            console.log('please input email send info');
            return;
        }

        const sendMail = await resend.emails.send(emailInfo);

        return sendMail;
    } catch (error) {
        console.error(error);
        return error;
    }
}
