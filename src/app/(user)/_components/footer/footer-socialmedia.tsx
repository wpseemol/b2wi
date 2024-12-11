import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

export default function FooterSocialMedia() {
    return (
        <>
            <div className="mt-3">
                <h2 className="text-2xl font-medium md:text-left text-center">
                    Follow Us
                </h2>
                <div className="flex md:justify-normal justify-center items-center gap-5 text-lg mt-1 text-neutral-100/80">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61568110844377"
                        target="_blank"
                        className="hover:text-neutral-50 duration-100 hover:scale-105">
                        <FaFacebookSquare />
                    </Link>
                    {/* <Link
                        href="#"
                        className="hover:text-neutral-50 duration-100 hover:scale-105">
                        <PiInstagramLogoLight />
                    </Link> */}
                    <Link
                        href="https://www.linkedin.com/company/b2wi-bangladesh-to-the-world-initiative/about/?viewAsMember=true%20"
                        target="_blank"
                        className="hover:text-neutral-50 duration-100 hover:scale-105">
                        <FaLinkedinIn />
                    </Link>
                    {/* <Link
                        href="#"
                        className="hover:text-neutral-50 duration-100 hover:scale-105">
                        <FaYoutube />
                    </Link> */}
                </div>
            </div>
        </>
    );
}
