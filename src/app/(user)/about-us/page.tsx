import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import OurMissionVision from './_components/our-mission-vision';

export default function AboutUsPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="About" />

            <section className="space-y-5 mb-14 w-[70%] mx-auto">
                <div className="text-center">
                    <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug text-center mb-3">
                        Our<span className="text-primary"> Story</span>
                    </h2>

                    <p className="text-center">
                        The Bangladesh 2 the World (B2W) Initiative is a
                        passionate commitment to empowering Bangladeshi talent
                        (students and professionals alike) and enabling them to
                        represent Bangladesh on the global academic and
                        professional stage.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug text-center mb-3">
                        Who Are We
                    </h3>
                    <p>
                        We’re a team of seasoned education professionals and
                        alumni of top-tier foreign universities from Canada, UK,
                        Australia, and Europe who have navigated the paths of
                        global academic and professional stages themselves.
                    </p>
                </div>
                <div className="space-y-3 text-center">
                    <h3 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug text-center mb-3">
                        Why did we decide to start B2W Initiative?
                    </h3>
                    <p>
                        Numerous studies have surmised that graduate
                        unemployment in Bangladesh is one of the highest in the
                        world. In a country where there is the gift of
                        “Demographic Dividend”, Bangladesh is failing miserably
                        to take benefit of the Demographic Dividend with
                        reported graduate unemployment rates as high as 38.6%.
                    </p>
                    <p>
                        According to the Bangladesh Bureau of Statistics (BBS),
                        nearly 800,000 graduates were unemployed by the end of
                        2022, reflecting an unemployment rate of 12% among
                        tertiary-educated individuals, which is the highest
                        across all education levels.
                    </p>
                    <p>
                        Although there are many factors contributing to this
                        high level of graduate unemployment rates, one of the
                        primary reasons is the economy’s limited capacity to
                        create good jobs. Each year, Bangladesh produces a
                        substantial number of graduates, with estimates
                        indicating that around 2 million new graduates enter the
                        job market annually. This influx significantly outpaces
                        job creation efforts, contributing to high levels of
                        unemployment among the educated youth.
                    </p>
                    <p>
                        This is one of the backdrops of launching B2W Initiative
                        whereby we want to create global opportunities for our
                        graduates and through that, we not only create positive
                        change in individual lives but also in how Bangladesh is
                        represented globally.
                    </p>
                </div>
            </section>

            {/* <AboutTabSection /> */}
            <OurMissionVision />
        </main>
    );
}
