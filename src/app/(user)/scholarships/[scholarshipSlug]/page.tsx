import BreadcrumbSecondLink from '@/components/breadcrumb-seceond-link';
import SocialShare from '@/components/social-share';
import { scholarshipsData } from '@/lib/db/scholarships-data';
import ScholarshipRelatedContent from './_components/scholarship-related-content';
import ScholarshipSingleContent from './_components/scholarship-single-content';

export default async function ScholarshipDetailsPage({
    params,
}: {
    params: Promise<{ scholarshipSlug: string }>;
}) {
    const { scholarshipSlug } = await params;

    const scholarshipData = scholarshipsData.find(
        (content) => content.slug === scholarshipSlug
    );

    return (
        scholarshipData && (
            <main>
                <section
                    className={` bg-cover bg-center h-64 sm:h-72 relative z-10`}
                    style={{
                        backgroundImage: `url("/images/scholarship/${scholarshipData?.imgUrl}")`,
                    }}
                >
                    <div className="container mx-auto ">
                        <div className="bg-slate-200/20 w-fit p-5 pt-0 rounded backdrop-blur-sm">
                            {scholarshipData.title && (
                                <BreadcrumbSecondLink
                                    className="text-white"
                                    secondHref="/scholarships"
                                    secondPageTitle="Scholarships"
                                    currentPageName={scholarshipData.title}
                                />
                            )}
                        </div>
                    </div>
                </section>
                <section className="container mx-auto relative z-20 -mt-24 bg-white dark:bg-[#030712] p-5 rounded-t-sm mb-10">
                    {scholarshipData && (
                        <ScholarshipSingleContent content={scholarshipData} />
                    )}

                    {scholarshipData && (
                        <SocialShare content={scholarshipData} />
                    )}
                </section>

                <section className="container mx-auto mb-10"></section>

                <section className="bg-neutral-200/90 dark:bg-neutral-200/15 pb-10 md:pb-16">
                    <div className="container mx-auto pt-8">
                        <h3 className="text-3xl font-semibold capitalize pb-5">
                            You may also like
                        </h3>

                        <ScholarshipRelatedContent slug={scholarshipSlug} />
                    </div>
                </section>
            </main>
        )
    );
}
