import { HackContentType } from '@/lib/db/hacks-data';
import Image from 'next/image';
import Link from 'next/link';
import { FaTags } from 'react-icons/fa6';

export default function HacksCard({ content }: { content: HackContentType }) {
    const hrefLink = `/hacks/${content.slug}`;

    return (
        <div className="group border border-neutral-600/15 rounded-lg">
            <figure className="w-full sm:h-[280px] h-[200px] rounded-lg overflow-hidden">
                <Link href={hrefLink}>
                    <Image
                        width={350}
                        height={240}
                        alt={content.title}
                        src={`/images/hack/${content.imgUrl}`}
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-110 duration-200"
                    />
                </Link>
            </figure>
            <div className="p-5">
                <div className="flex items-center gap-1 text-xs mb-3 text-neutral-900/80 dark:text-neutral-100/80">
                    <FaTags /> <h3>{content.publishIn}</h3>
                </div>
                <p className="text-neutral-900/80 dark:text-neutral-100/80 text-sm mb-1">
                    <Link href={hrefLink}>{content.publishOn}</Link>
                </p>

                <Link href={hrefLink}>
                    <div
                        dangerouslySetInnerHTML={{ __html: content.title }}
                        className="text-base font-semibold text-neutral-900/80 dark:text-neutral-100/80 group-hover:underline duration-150"
                    />
                </Link>

                <Link
                    href={hrefLink}
                    className="mt-4 text-base text-neutral-900/75 dark:text-neutral-100/80 flex items-center gap-1 group-hover:gap-3 duration-150">
                    Read More <span className="">{'>'}</span>
                </Link>
            </div>
        </div>
    );
}
