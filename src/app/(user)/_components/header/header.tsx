import HeaderMenuSticky from './header-menu-sticky';
import NavMenu from './nav-menu';
import TopContactInfo from './top-contact-info';
import TopMenu from './top-menu';

export default function Header() {
    return (
        <header className="">
            <HeaderMenuSticky />
            <section className="border-b relative z-10 bg-white dark:bg-[#030712]">
                <TopMenu />
            </section>
            <section className=" md:hover:py-1 -my-1 duration-150 bg-slate-50 dark:bg-slate-900 relative">
                <TopContactInfo />
            </section>

            <section className="bg-gradient-to-r from-[#2d3544] to-[#0165ac] border-y border-primary py-3 dark:bg-gradient-to-r dark:from-[#224a94] dark:to-[#17174b] md:px-3 px-2 ">
                <NavMenu />
            </section>
        </header>
    );
}
