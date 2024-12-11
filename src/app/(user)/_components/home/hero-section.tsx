import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            className=" bg-right-top bg-no-repeat bg-cover bg-[#8a3f3fb2] -mt-1"
            style={{
                backgroundImage: `url("/images/hero/Hero section.png")`,
            }}
        >
            <div className="w-full min-h-[430px] bg-neutral-900/45">
                <div className="container mx-auto md:px-0 px-2  text-white flex flex-col justify-center md:gap-6 gap-3 min-h-[420px]">
                    {/* <h3 className="text-2xl font-semibold">
                        Ignite Your Potential with
                    </h3> */}
                    <h2 className="sm:text-6xl md:text-5xl text-4xl font-semibold">
                        Bangladeshi Talent.
                        <br /> Global Aspiration.
                    </h2>
                    <p className="text-base font-normal">
                        Whether you’re a student or a professional, at B2WI,{' '}
                        <br />
                        we’re empowering Bangladeshi talent to go global
                    </p>

                    <div>
                        {/* <ScheduleCall /> */}
                        {/* <div className="flex items-center gap-1">
                            <span className="w-4 h-4 ">
                                <TickIcon />
                            </span>
                            <p className='className="text-base font-normal"'>
                                First Pearson-Certified Career Counsellor and
                                Life Coach in Bangladesh
                            </p>
                        </div> */}
                        <Link href={'/about-us'}>
                            <button
                                type="submit"
                                className="flex justify-center items-center bg-primary/85 duration-150 px-6 py-4 rounded-sm gap-1 font-medium dark:border-white hover:dark:border-neutral-900 hover:bg-neutral-100/85 border border-[#013f6b] hover:text-neutral-900/90 hover:font-medium hover:border-neutral-900/90"
                            >
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
