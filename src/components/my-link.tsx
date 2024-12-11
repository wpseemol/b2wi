'use client';
import { MyLinkType } from '@/types/main';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyLink({
    href,
    className,
    children,
    activeClassName,
}: MyLinkType) {
    const pathName: string = usePathname();

    return (
        <Link
            href={href}
            className={`${className} ${
                href === pathName ? activeClassName : ''
            }`}
        >
            {children}
        </Link>
    );
}
