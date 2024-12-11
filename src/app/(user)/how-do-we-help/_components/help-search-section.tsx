import { TopSearchType } from '@/types/how-does-help';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function HelpSearchSection() {
    return (
        <section className=" flex flex-col items-center justify-center py-10 gap-y-5 ">
            <h2 className="md:text-5xl text-3xl font-bold text-white">
                How Does <span className="text ">B2WI </span> Help
            </h2>
            <form className="relative">
                {/* Search Icon */}
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
                {/* Input Field */}
                <input
                    type="text"
                    name="help"
                    id="search"
                    placeholder="Search..."
                    className="pl-9 focus:right-0 focus:outline-none p-2 rounded-lg border border-gray-300 w-full text-neutral-800 dark:text-neutral-100"
                />
            </form>

            <div className="flex items-center gap-3 text-neutral-100 md:flex-nowrap flex-wrap">
                <p>Top Search</p>

                {topSearch.map((searchItem) => (
                    <Link
                        key={searchItem.id}
                        href={`/how-do-we-help/${searchItem.href}`}
                        className="bg-[#499ad356] px-4 py-2 rounded-2xl">
                        {searchItem.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}

const topSearch: TopSearchType[] = [
    {
        id: 'research-assistance',
        title: 'Research Assistance',
        href: '#research-assistance',
    },
    {
        id: 'profile-assessment',
        title: 'Profile Assessment',
        href: '#profile-assessment',
    },
    {
        id: 'sop-review',
        title: 'SOP Review',
        href: '#sop-review',
    },
];
