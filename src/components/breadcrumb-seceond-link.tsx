import { cn } from '@/lib/utils';
import Link from 'next/link';

import { MdNavigateNext } from 'react-icons/md';

export default function BreadcrumbSecondLink({
    currentPageName,
    className,
    activeClassName,
    secondHref,
    secondPageTitle,
}: {
    currentPageName: string;
    className?: string;
    activeClassName?: string;
    secondHref: string;
    secondPageTitle: string;
}) {
    return (
        <section className="pt-4 sm:pl-0 pl-2">
            <div className="flex items-center gap-2 ">
                <Link
                    href="/"
                    className={cn('hover:text-primary duration-150', className)}
                >
                    Home
                </Link>
                <MdNavigateNext
                    className={cn('hover:text-primary duration-150', className)}
                />
                <Link
                    href={secondHref}
                    className={cn('hover:text-primary duration-150', className)}
                >
                    {secondPageTitle}
                </Link>
                <MdNavigateNext
                    className={cn('hover:text-primary duration-150', className)}
                />
                <Link
                    href={'#'}
                    className={cn('text-primary', activeClassName)}
                >
                    {wordClops(currentPageName)}
                </Link>
            </div>
        </section>
    );
}

export function wordClops(title: string, showWord = 3): string {
    const wordArray = title.split(' ');
    const wordCount = wordArray.length;
    if (wordCount > showWord) {
        const showWordArray = wordArray.slice(0, showWord);
        return showWordArray.join(' ') + '...';
    } else {
        return title;
    }
}
