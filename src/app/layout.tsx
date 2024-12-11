import Providers from '@/components/providers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
    title: 'B2W Initiative',
    description:
        'The Bangladesh 2 the World (B2W) Initiative is a passionate commitment to empowering Bangladeshi talent (students and professionals alike) and enabling them to represent Bangladesh on the global academic and professional stage.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
