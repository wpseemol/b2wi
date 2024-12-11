import { CategoryHelpType } from '@/types/how-does-help';
import Image from 'next/image';

export default function HelpCategoryCard({
    content,
}: {
    content: CategoryHelpType;
}) {
    return (
        <div className="relative flex justify-center group/a">
            <div className="group border border-black/50 rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-200 relative 2xl:h-[265px] sm:h-[300px] h-[240px] hover:h-fit overflow-hidden max-w-[305px] sm:max-w-[380px] md:max-w-[350px] lg:max-w-[390px]">
                <figure>
                    <Image
                        src={`/images/how-does-help/${content.imageUrl}`}
                        alt={content.title}
                        width={450}
                        height={380}
                    />
                </figure>
                <div className="md:px-5 -pb-5 p-2 flex flex-col justify-center items-center absolute group-hover:top-0 2xl:top-[12.7rem] sm:top-[14.8rem] top-[11.5rem] left-0 duration-200 group-hover:bg-sky-900/75 group-hover:text-white group-hover:w-full group-hover:h-full ">
                    <h3 className=" h-12 flex items-center group-hover:sm:text-2xl group-hover:text-xl group-hover:font-semibold group-hover:text-neutral-900/85 group-hover:text-white group-hover:dark:text-neutral-100/85 duration-150 text-center group-hover:mb-3">
                        {content.title}
                    </h3>
                    <p className="text-center sm:font-medium text-sm sm:text-base group-hover:text-white text-neutral-800/80 dark:text-neutral-100/85">
                        {content.description}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[3.7rem] group-hover/a:hidden group-hover/a:md:block "></div>
        </div>
    );
}
