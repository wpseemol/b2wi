import { HackContentType } from '@/lib/db/hacks-data';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaTags } from 'react-icons/fa6';

export default function InsightsCarouselCard({
    content,
}: {
    content: HackContentType;
}) {
    const hrefSlug = `/hacks/${content.slug}`;

    return (
        <li key={content.id} className="group">
            <figure className="w-full sm:h-[280px] h-[200px] rounded-lg overflow-hidden">
                <Link href={hrefSlug}>
                    <Image
                        width={350}
                        height={240}
                        alt={content.title}
                        src={`/images/hack/${content.imgUrl}`}
                        className="w-full h-full object-cover object-center rounded-lg group-hover:scale-110 duration-200"
                    />
                </Link>
            </figure>
            <div className="ml-1 mt-3">
                <div className="flex items-center gap-1 text-xs mb-3 text-neutral-100/80">
                    <Link href={hrefSlug}>
                        <FaTags />
                    </Link>
                    <Link href={hrefSlug}>
                        <h3>{content.publishIn}</h3>
                    </Link>
                </div>
                <p className="text-neutral-100/90 text-sm mb-1">
                    <Link href={hrefSlug}>{content.publishOn}</Link>
                </p>

                <Link href={hrefSlug}>
                    <div
                        dangerouslySetInnerHTML={{ __html: content.title }}
                        className="text-base font-semibold text-[#fff] group-hover:underline duration-150"
                    />
                </Link>

                <Link href={hrefSlug}>
                    <button className="mt-4 text-base text-primary flex items-center gap-1 group-hover:gap-3 duration-150 border px-3 py-2 rounded-md bg-white/90 dark:bg-white  border-primary">
                        Read More{' '}
                        <span className="">
                            <BsArrowRightShort className="text-2xl" />
                        </span>
                    </button>
                </Link>
            </div>
        </li>
    );
}
