import { ScholarshipsDataType } from '@/lib/db/scholarships-data';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaTags } from 'react-icons/fa6';

export default function ScholarshipCarouselCard({
    content,
}: {
    content: ScholarshipsDataType;
}) {
    const hrefSlug = `/scholarships/${content.slug}`;
    return (
        <li
            key={content.id}
            className="group border border-neutral-500/10 rounded-lg "
        >
            <figure className="w-full sm:h-[280px] h-[200px] rounded-t-lg overflow-hidden">
                <Link href={hrefSlug}>
                    <Image
                        width={350}
                        height={240}
                        alt={content.title}
                        src={`/images/scholarship/${content.imgUrl}`}
                        className="w-full h-full object-cover object-center rounded-t-lg scale-110 hover:scale-100 duration-200"
                    />
                </Link>
            </figure>
            <div className="ml-1 mt-3 p-3 pl-6 pb-6 ">
                <div className="flex items-center gap-1 text-xs mb-3 text-neutral-700/70 dark:text-neutral-400">
                    <Link href={hrefSlug}>
                        <FaTags />
                    </Link>

                    <Link href={hrefSlug}>
                        <h3>{content.publishedIn}</h3>
                    </Link>
                </div>
                <p className="text-primary/70 dark:text-neutral-300 text-sm mb-1">
                    <Link href={hrefSlug}>{content.publishedOn}</Link>
                </p>
                <h2 className="text-base font-semibold text-[#002c4b] dark:text-neutral-100 group-hover:underline duration-150 ">
                    <Link href={hrefSlug}>{content.title}</Link>
                </h2>

                <Link href={hrefSlug}>
                    <button className="mt-4 text-base text-neutral-700/75 dark:text-neutral-500 flex items-center gap-1 group-hover:gap-4 duration-150 bg-primary text-white px-3 py-2 rounded">
                        Read More{' '}
                        <span className="text-2xl">
                            <BsArrowRightShort />
                        </span>
                    </button>
                </Link>
            </div>
        </li>
    );
}
