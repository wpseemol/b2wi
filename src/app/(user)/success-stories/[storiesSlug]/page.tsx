import BreadcrumbSecondLink from '@/components/breadcrumb-seceond-link';
import { successStories } from '@/lib/db/success-stories';
import MoreContent from './_components/more-content';
import SocialShare from './_components/social-share';
import StoriesSingleContent from './_components/stories-single-content';

export default async function StoriesSinglePage({
    params,
}: {
    params: Promise<{ storiesSlug: string }>;
}) {
    const { storiesSlug } = await params;

    const storiesData = successStories.find(
        (stories) => stories.slug === storiesSlug
    );

    return (
        <main>
            <section
                className={` bg-cover bg-center h-64 sm:h-72 relative z-10`}
                style={{
                    backgroundImage: `url("/images/success-stories/${storiesData?.imgUrl}")`,
                }}>
                <div className="container mx-auto ">
                    <div className="bg-slate-200/20 w-fit p-5 pt-0 rounded backdrop-blur-sm">
                        {storiesData?.title && (
                            <BreadcrumbSecondLink
                                secondHref="/success-stories"
                                secondPageTitle="Success Stories"
                                currentPageName={storiesData?.title}
                            />
                        )}
                    </div>
                </div>
            </section>
            <section className="container mx-auto relative z-20 -mt-24 bg-white dark:bg-[#030712] p-5 rounded-t-sm mb-10">
                {storiesData && <StoriesSingleContent content={storiesData} />}

                {storiesData && <SocialShare content={storiesData} />}
            </section>

            <section className="container mx-auto mb-10"></section>

            <section className="bg-neutral-200/90 dark:bg-neutral-200/15 pb-10 md:pb-16">
                <div className="container mx-auto pt-8">
                    <h3 className="text-3xl font-semibold capitalize pb-5">
                        You may also like
                    </h3>

                    <MoreContent slug={storiesSlug} />
                </div>
            </section>
        </main>
    );
}
