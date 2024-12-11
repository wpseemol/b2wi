'use client';

import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import HacksContent from './_components/hacks-content';

export default function HacksPage() {
    return (
        <main>
            <section className="container mx-auto">
                <BreadcrumbFirstLink currentPageName="Hacks" />
            </section>

            <section className="text-center py-5 container mx-auto">
                <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug">
                    Study Abroad Hacks
                </h2>
                {/* <p className="font-normal text-neutral-800/80">
                    Take advantage of the experiential-learning opportunities
                    <br />
                    built into many programs.
                </p> */}
            </section>

            <section className="container mx-auto md:mb-16 mb-10">
                <HacksContent />
            </section>
        </main>
    );
}
