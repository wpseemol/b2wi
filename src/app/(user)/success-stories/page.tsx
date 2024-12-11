import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import SuccessStoriesContent from './_components/success-stories-content';

export default function SuccessStoriesPage() {
    return (
        <main>
            <section className="container mx-auto">
                <BreadcrumbFirstLink currentPageName="Success Stories" />
            </section>

            <section className="text-center py-5 container mx-auto">
                <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug">
                    <span className="text-primaryColor">Success</span> Stories
                </h2>
                {/* <p className="font-normal text-neutral-800/80">
                    Take advantage of the experiential-learning opportunities
                    <br />
                    built into many programs.
                </p> */}
            </section>
            <section className="container mx-auto md:mb-16 mb-10">
                <SuccessStoriesContent />
            </section>
        </main>
    );
}
