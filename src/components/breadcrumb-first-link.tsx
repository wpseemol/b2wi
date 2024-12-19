import { cn } from '@/lib/utils';
import Link from 'next/link';

import { MdNavigateNext } from 'react-icons/md';

export default function BreadcrumbFirstLink({
    currentPageName,
    className,
    activeClassName,
}: {
    currentPageName: string;
    className?: string;
    activeClassName?: string;
}) {
    return (
        <section className="pt-4 sm:pl-0 pl-2">
            <div className="flex items-center gap-2 ">
                <Link href="/" className={cn(className)}>
                    Home
                </Link>
                <MdNavigateNext />
                <p
                    className={cn(
                        ' text-primary dark:text-blue-700',
                        activeClassName
                    )}
                >
                    {currentPageName}
                </p>
            </div>
        </section>
    );
}
