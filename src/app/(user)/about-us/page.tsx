import BreadcrumbFirstLink from '@/components/breadcrumb-first-link';
import AboutTabSection from './_components/about-tab-section';
import OurMissionVision from './_components/our-mission-vision';

export default function AboutUsPage() {
    return (
        <main className="container mx-auto">
            <BreadcrumbFirstLink currentPageName="About" />
            <AboutTabSection />
            <OurMissionVision />
        </main>
    );
}
