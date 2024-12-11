import BreadcrumbFirstLink from '../../components/breadcrumb-first-link';
import ContactInfoSection from './_components/contact-info-setion';
import SendMessageSection from './_components/send-message-section';

export default function ContactPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="Contact" />

            <section className="text-center py-5 md:mb-16 mb-10">
                <h2 className="text-neutral-900/85 sm:text-[52px] text-3xl font-bold leading-snug">
                    Have Questions? <br />
                    <span className="text-primaryColor">Contact us</span>.
                </h2>
                <p className="font-normal text-neutral-800/80">
                    Take advantage of the experiential-learning opportunities
                    <br />
                    built into many programs.
                </p>
            </section>
            <section className="grid md:grid-cols-3 grid-cols-1 items-center gap-5 md:mb-16 mb-10">
                <SendMessageSection />
                <ContactInfoSection />
            </section>
        </main>
    );
}
