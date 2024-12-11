import BreadcrumbSecondLink from '@/components/breadcrumb-seceond-link';
import SocialShare from '@/components/social-share';
import { hackContents } from '@/lib/db/hacks-data';
import HackDetails from './_components/hack-details';
import HackRelatedContents from './_components/hack-related-contents';

export default async function HackSingePage({
    params,
}: {
    params: Promise<{ hackSlug: string }>;
}) {
    const { hackSlug } = await params;

    const hackContent = hackContents.find(
        (content) => content.slug === hackSlug
    );

    return (
        hackContent && (
            <main>
                <section
                    className={` bg-cover bg-center h-64 sm:h-72 relative z-10`}
                    style={{
                        backgroundImage: `url("/images/hack/${hackContent?.imgUrl}")`,
                    }}
                >
                    <div className="container mx-auto ">
                        <div className="bg-slate-200/20 w-fit p-5 pt-0 rounded backdrop-blur-sm">
                            {hackContent?.title && (
                                <BreadcrumbSecondLink
                                    className="text-white"
                                    secondHref="/hacks"
                                    secondPageTitle="Hacks"
                                    currentPageName={hackContent.title}
                                />
                            )}
                        </div>
                    </div>
                </section>
                <section className="container mx-auto relative z-20 -mt-24 bg-white dark:bg-[#030712] p-5 rounded-t-sm mb-10">
                    {hackContent && <HackDetails content={hackContent} />}

                    {hackContent && <SocialShare content={hackContent} />}
                </section>

                <section className="container mx-auto mb-10"></section>

                <section className="bg-neutral-200/90 dark:bg-neutral-200/15 pb-10 md:pb-16">
                    <div className="container mx-auto pt-8">
                        <h3 className="text-3xl font-semibold capitalize pb-5">
                            You may also like
                        </h3>

                        <HackRelatedContents slug={hackSlug} />
                    </div>
                </section>
            </main>
        )
    );
}
