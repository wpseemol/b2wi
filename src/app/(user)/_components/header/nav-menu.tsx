import { MenuItem } from '@/types/nav-menu';
import MobileNavMenu from './mobile-nav-menu';

export default function NavMenu() {
    return (
        <div>
            <nav className="container mx-auto flex justify-between items-center relative">
                {/* menu button  */}
                <section className=" md:block hidden ml-24">
                    <MobileNavMenu />
                </section>
                {/* menu button  */}

                {/* <ul className="xl:flex 2xl:gap-3 gap-2 items-center text-neutral-100 text-[16px] font-medium hidden lg:tracking-tighter 2xl:tracking-normal">
                    {nevMenus.map((menu) => {
                        return (
                            <li
                                key={menu.id}
                                className={`hover:text-[#5e9dca] ${
                                    menu.subMenu ? 'relative group' : ''
                                }`}>
                                {menu.subMenu ? (
                                    <button className="flex items-center gap-1 cursor-pointer border-spacing-2 ">
                                        {menu.name}{' '}
                                        <span>
                                            <IoMdArrowDropdown />{' '}
                                        </span>{' '}
                                        <ul className="absolute top-7 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xl rounded-b-md overflow-hidden h-0 pt-0 group-hover:h-fit group-hover:pt-2 group-hover:border group-hover:opacity-100 duration-200">
                                            {subMenu.map((menu) => (
                                                <li
                                                    key={menu.id}
                                                    className="pl-2 pr-5 border-b w-full text-nowrap hover:translate-x-1 duration-100 hover:text-[#5e9dca] text-left">
                                                    <MyLink
                                                        href={menu.slug}
                                                        activeClassName="text-[#5e9dca]">
                                                        {menu.name}
                                                    </MyLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ) : (
                                    <MyLink
                                        href={menu.slug}
                                        activeClassName="text-[#5e9dca]"
                                        className="text-nowrap">
                                        {menu.name}
                                    </MyLink>
                                )}
                            </li>
                        );
                    })}
                </ul> */}

                <button
                    className="bg-transparent border-2 
                    hover:scale-105 duration-300 hover:bg-transparent font-medium text-neutral-50 text-center text-sm md:mr-24
                border-[#1d87d3] px-3 py-1 rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto md:mx-0 text-nowrap lg:tracking-tighter 2xl:tracking-normal"
                >
                    BOOK CONSULTATION
                </button>
            </nav>
        </div>
    );
}

export const nevMenus: MenuItem[] = [
    { id: 1, slug: '/', name: 'Home' },
    { id: 2, slug: '/about-us', name: 'About Us' },
    { id: 3, slug: '/how-do-we-help', name: 'How Do We Help' },
    { id: 4, slug: '/people-behind', name: 'People Behind' },
    { id: 5, slug: '/success-stories', name: 'Success Stories' },
    { id: 6, slug: '/hacks', name: 'Hacks ' },
    { id: 7, slug: '/scholarships', name: 'Scholarships' },
    { id: 8, slug: '/assessment', name: 'Assessment' },
    { id: 9, slug: '/media-coverage', name: 'Media Coverage' },
    { id: 10, slug: '/contact', name: 'Contact' },
];

export const subMenu: MenuItem[] = [
    {
        id: 1,
        slug: '#',
        name: 'How Do We Help',
    },
    { id: 2, slug: '#', name: 'People Behind' },
    { id: 3, slug: '#', name: 'Success Stories' },
    { id: 4, slug: '#', name: 'Study Abroad Hacks' },
    { id: 5, slug: '#', name: 'B2WI In the News' },
];
