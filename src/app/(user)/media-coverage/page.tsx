import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import MediaCoverageNews from './_components/media-coverage-news';

export default function MediaCoveragePage() {
    return (
        <main>
            <section className="container mx-auto">
                <BreadcrumbFirstLink currentPageName="Media Coverage" />
            </section>

            <section className="text-center py-5 container mx-auto">
                <h2 className="text-neutral-900/85 dark:text-neutral-100 sm:text-[52px] text-3xl font-bold leading-snug">
                    B2WI In the News
                </h2>
                <p className="font-normal text-neutral-800/80 dark:text-neutral-100 text-xl">
                    Take advantage of the experiential-learning opportunities
                    built into many programs.
                </p>
            </section>
            <section className="container mx-auto md:mb-16 mb-10">
                <MediaCoverageNews />
            </section>
        </main>
    );
}
