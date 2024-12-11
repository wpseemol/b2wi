import Image from 'next/image';
import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';
import { VscMail } from 'react-icons/vsc';
import EmailSendButton from './email-send-input';
import FooterSocialMedia from './footer-socialmedia';

export default function Footer() {
    return (
        <footer className="bg-[#023153] dark:bg-[#02223a] text-white">
            <section className="container mx-auto flex md:flex-row flex-col md:justify-evenly items-start md:py-14 py-8 md:gap-0 gap-7 md:pb-8">
                {/* site inform */}

                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <figure className="md:pb-5 pb-3 md:mx-0 mx-auto w-fit -mt-4">
                        <Image
                            src="/images/footer.png"
                            alt="footer site logo"
                            width={200}
                            height={150}
                            className="w-auto h-auto"
                        />
                    </figure>
                    {/* <p className="text-base text-center md:text-left">
                        Unlock your potential with Empower Minds—your trusted
                        partner in turning study abroad dreams into reality.
                    </p> */}

                    {/* footer social media section */}
                    <FooterSocialMedia />
                </div>
                {/* site inform */}
                {/* some link */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <h2 className="text-2xl font-medium border-l-4 border-primaryColor pl-3 md:mb-5 mb-2 w-fit md:w-full mx-auto md:mx-0">
                        Our Partners
                    </h2>
                    <ul className="space-y-2 capitalize text-center md:text-left">
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="https://bepro.com.bd/" target="_blank">
                                BePro
                            </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link
                                href="https://globaleduexp.com/"
                                target="_blank">
                                GEE
                            </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="https://fly8.info/" target="_blank">
                                FLY8
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* some link */}

                {/* Quick Links */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <h2 className="text-2xl font-medium border-l-4 border-primaryColor pl-3 md:mb-5 mb-2 w-fit mx-auto md:w-full md:mx-0">
                        Useful Links
                    </h2>
                    <ul className="space-y-2 capitalize md:text-left text-center">
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="/about-us">About Us </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="/faq">FAQs </Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        {/* <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">How do we help</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">People behind</Link>
                        </li>
                        <li className="hover:translate-x-2 hover:text-primaryColor duration-150">
                            <Link href="#">Success story</Link>
                        </li> */}
                    </ul>
                </div>
                {/* Quick Links */}

                {/* Quick Links */}
                <div className="xl:w-[calc(25%-3.5rem)] md:w-1/4 w-full xl:px-5">
                    <div className="">
                        <h2 className="text-2xl font-medium pl-3 mb-5 border-l-4 border-primaryColor mx-auto w-fit md:mx-0 ">
                            Contact Us
                        </h2>
                        <ul className="font-thin space-y-2 mx-auto md:mx-0 md:w-full">
                            <li className="group">
                                <Link
                                    href="mailto:⁠b2winitiative@gmail.com"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <VscMail className="group-hover:scale-125 group-hover:shadow-md duration-150" />{' '}
                                    <p className="font-thin text-sm">
                                        ⁠b2winitiative@gmail.com
                                    </p>
                                </Link>
                            </li>
                            <li className="group">
                                <Link
                                    href="https://www.google.com/maps/dir//House+No-6,+Road+No+-+2%2FB,+Baridhara+J+Block,+Dhaka+1212/@23.7953511,90.342224,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c73a91c0919d:0xd83a57adfbb498bb!2m2!1d90.4246256!2d23.795373?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <MdLocationPin className="group-hover:scale-125 group-hover:shadow-md duration-150" />{' '}
                                    <p className="font-thin text-sm">
                                        Baridhara, Dhaka, Bangladesh
                                    </p>
                                </Link>
                            </li>
                            <li className="group">
                                <Link
                                    href="tel:+8801685456708"
                                    target="_blank"
                                    className="flex items-center gap-3">
                                    <HiPhone className="group-hover:scale-125 group-hover:shadow-md duration-150" />{' '}
                                    <p className="font-thin text-sm">
                                        +8801685456708
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        {/* <h2 className="text-2xl font-medium md:mb-5 mb-2 md:text-left text-center">
                            What are you looking for?
                        </h2> */}
                        <div>
                            <EmailSendButton />
                        </div>
                    </div>
                </div>
                {/* Quick Links */}
            </section>

            {/* <section className="bg-white">
                <figure className="mx-auto w-fit">
                    <Image
                        src={'/images/Payment-Banner_Jul24_V1-02-2048x229.png'}
                        width={1140}
                        height={127}
                        alt="ssl commerz banare"
                    />
                </figure>
            </section> */}
            <section className="container mx-auto border-t ">
                <p className="text-center md:py-5 py-3 text-base">
                    Copyright ©2024 B2W Initiative. Developed by{' '}
                    <Link
                        href={'https://it.ysibangla.com/'}
                        target="_blank"
                        className="underline underline-offset-2">
                        YSI Bangla Ltd.
                    </Link>
                </p>
            </section>
        </footer>
    );
}
