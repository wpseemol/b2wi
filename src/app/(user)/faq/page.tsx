import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import { FaqAccordion } from './_components/faq-accordion';

export default function FaqPage() {
    return (
        <main>
            <section className="container mx-auto">
                <BreadcrumbFirstLink currentPageName="FAQ" />
            </section>

            <section className="text-center py-5 container mx-auto">
                <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug">
                    Frequently Asked{' '}
                    <span className="text-primary">Questions</span>
                </h2>
                {/* <p className="font-normal text-neutral-800/80">
                    Take advantage of the experiential-learning opportunities
                    <br />
                    built into many programs.
                </p> */}
            </section>

            <section className="container mx-auto mb-10">
                <FaqAccordion />
            </section>
        </main>
    );
}
