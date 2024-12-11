import { SuccessStoriesType } from '@/lib/db/success-stories';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaTags } from 'react-icons/fa6';
import CardRapperClick from './card-wraper-click';

export default function SuccessStoriesCard({
    storiesDetails,
}: {
    storiesDetails: SuccessStoriesType;
}) {
    return (
        <CardRapperClick slug={storiesDetails.slug}>
            <figure className="w-full sm:h-[280px] h-[200px] rounded-t-lg overflow-hidden">
                <Image
                    width={350}
                    height={240}
                    alt={storiesDetails.title}
                    src={`/images/success-stories/${storiesDetails.imgUrl}`}
                    className="w-full h-full object-cover object-center rounded-t-lg scale-110 hover:scale-100 duration-200"
                />
            </figure>
            <div className="ml-1 mt-3 p-3 py-6 pb-6 ">
                <div className="flex items-center gap-1 text-xs mb-3 text-neutral-700/70 dark:text-neutral-400">
                    <FaTags /> <h3>{storiesDetails.publishIn}</h3>
                </div>
                <p className="text-primaryColor/70 dark:text-neutral-300 text-sm mb-1">
                    {storiesDetails.publishOn}
                </p>
                <h2 className="text-base font-semibold text-[#002c4b] dark:text-neutral-100 group-hover:underline duration-150 ">
                    {storiesDetails.title}
                </h2>
                <button className="mt-4 text-base text-neutral-700/75 dark:text-neutral-200 flex items-center gap-1 group-hover:gap-4 duration-150 bg-primaryColor text-white px-3 py-2 rounded">
                    Read More{' '}
                    <span className="text-2xl">
                        <BsArrowRightShort />
                    </span>
                </button>
            </div>
        </CardRapperClick>
    );
}
