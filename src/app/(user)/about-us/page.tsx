import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import OurMissionVision from './_components/our-mission-vision';

export default function AboutUsPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="About" />

            <section className="text-center w-[75%] mb-10 mx-auto md:px-0 px-2">
                <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug text-center mb-3">
                    Our
                    <span className="text-primary dark:text-white"> Story</span>
                </h2>

                <p className="">
                    The Bangladesh 2 the World (B2W) Initiative is a passionate
                    commitment to empowering Bangladeshi talent (students and
                    professionals alike) and enabling them to represent
                    Bangladesh on the global academic and professional stage.
                </p>
            </section>

            <section className="space-y-10 mb-14 mx-auto md:px-0 px-2">
                <div className="flex md:flex-row flex-col gap-x-6 items-center">
                    <div className="md:w-[40%]">
                        <h3 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug md:text-right text-center mb-3 md:border-r-8 border-r-0 border-primary pr-1">
                            Who Are We
                        </h3>
                    </div>
                    <div className="md:w-[60%] md:text-left text-center">
                        <p>
                            We’re a team of seasoned education professionals and
                            alumni of top-tier foreign universities from Canada,
                            UK, Australia, and Europe who have navigated the
                            paths of global academic and professional stages
                            themselves.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse gap-x-6 items-center">
                    <div className="md:w-[40%]">
                        <h3 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug mb-3 md:text-left text-center md:border-l-8 border-l-0 border-primary pl-1">
                            Why did we decide to start B2W Initiative?
                        </h3>
                    </div>
                    <div className="md:w-[60%] md:text-right text-center">
                        <p>
                            Numerous studies have surmised that graduate
                            unemployment in Bangladesh is one of the highest in
                            the world. In a country where there is the gift of
                            “Demographic Dividend”, Bangladesh is failing
                            miserably to take benefit of the Demographic
                            Dividend with reported graduate unemployment rates
                            as high as 38.6%.
                        </p>
                        <p>
                            According to the Bangladesh Bureau of Statistics
                            (BBS), nearly 800,000 graduates were unemployed by
                            the end of 2022, reflecting an unemployment rate of
                            12% among tertiary-educated individuals, which is
                            the highest across all education levels.
                        </p>
                        <p>
                            Although there are many factors contributing to this
                            high level of graduate unemployment rates, one of
                            the primary reasons is the economy’s limited
                            capacity to create good jobs. Each year, Bangladesh
                            produces a substantial number of graduates, with
                            estimates indicating that around 2 million new
                            graduates enter the job market annually. This influx
                            significantly outpaces job creation efforts,
                            contributing to high levels of unemployment among
                            the educated youth.
                        </p>
                        <p>
                            This is one of the backdrops of launching B2W
                            Initiative whereby we want to create global
                            opportunities for our graduates and through that, we
                            not only create positive change in individual lives
                            but also in how Bangladesh is represented globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* <AboutTabSection /> */}
            <OurMissionVision />
        </main>
    );
}
