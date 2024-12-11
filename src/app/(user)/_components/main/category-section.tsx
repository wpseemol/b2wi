import ResearchAssistance from '@/components/svg/research-assistance';
import { CgPlayListSearch } from 'react-icons/cg';
import { GiFamilyHouse } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';
import { VscOpenPreview } from 'react-icons/vsc';

export default function CategorySection() {
    return (
        <section className="container mx-auto md:px-0 px-2 md:mb-16 mb-8">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 gap-5">
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem]">
                        <ResearchAssistance />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        University Research <br /> Assistance
                    </h2>
                </div>

                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <ImProfile className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        Profile Assessment
                    </h2>
                </div>

                {/* item section */}
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <CgPlayListSearch className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        SOP Review
                    </h2>
                </div>
                {/* item section */}
                {/* item section */}
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <CgPlayListSearch className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        LOR Review
                    </h2>
                </div>
                {/* item section */}
                {/* item section */}
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <VscOpenPreview className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        Visa Application Review
                    </h2>
                </div>
                {/* item section */}
                {/* item section */}
                <div className="group flex flex-col items-center border border-neutral-700/10 px-4 py-7 hover:shadow-md duration-150 rounded h-[12rem]">
                    <span className="group-hover:scale-105 duration-150 w-[5rem] h-[5rem] flex justify-center items-center">
                        <GiFamilyHouse className="text-5xl text-[#087bceb3]" />
                    </span>
                    <h2 className="text-center font-semibold text-neutral-800/70 dark:text-neutral-50/75 w-60">
                        Accommodation Assistance
                    </h2>
                </div>
                {/* item section */}
            </div>
        </section>
    );
}
