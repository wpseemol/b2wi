import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { ModeToggle } from './mode-toggle';

export default function TopMenu() {
    return (
        <>
            <div
                className="mx-auto container flex sm:justify-end
                justify-center items-center text-fontColor/85 dark:text-neutral-100/80 px-2 md:px-3
                 ">
                {/* more link */}
                <div className="flex md:gap-5 gap-3 justify-end items-center text-base">
                    <ModeToggle />

                    {/* Social icons */}
                    <Link
                        href="https://www.facebook.com/profile.php?id=61568110844377"
                        target="_black"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaFacebookSquare />
                    </Link>
                    {/* <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <PiInstagramLogoLight />
                    </Link> */}
                    <Link
                        href="https://www.linkedin.com/company/b2wi-bangladesh-to-the-world-initiative/about/?viewAsMember=true%20"
                        target="_black"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaLinkedinIn />
                    </Link>
                    {/* <Link
                        href="#"
                        className="hover:text-primaryColor duration-100 hover:scale-105">
                        <FaYoutube />
                    </Link> */}
                    {/* Social icons */}
                </div>
            </div>
        </>
    );
}
