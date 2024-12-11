import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import AssessmentForm from './_components/assessment-form';

export default function AssessmentPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="Assessment" />

            <section className="text-center py-5 sm:mb-8">
                <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug">
                    Profile
                    <span className="text-primaryColor"> Assessment</span>.
                </h2>
                <p className="font-normal text-neutral-900/85 dark:text-neutral-100/90">
                    Ready to embark on your global academic journey? Our team is
                    here to guide you every step of the way.
                    <br />
                    Submit your details for a Profile Assessment.
                </p>
            </section>
            <AssessmentForm />
        </main>
    );
}
