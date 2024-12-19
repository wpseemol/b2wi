import AboutSection from './_components/home/about-section';
import BrandingSection from './_components/home/branding-section';
import HeroSection from './_components/home/hero-section';
import InsightsSection from './_components/home/Insights-section';
import NewSection from './_components/home/news-section';
import OurSkillSection from './_components/home/our-skills-section';
import ProjectDoneNumbering from './_components/home/project-done-numbering';
import ScholarshipUpdates from './_components/home/scholarship-updates-section';
import TestimonialsSection from './_components/home/testimonials-section';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <BrandingSection />
            <AboutSection />
            <ProjectDoneNumbering />
            {/* our service */}
            <OurSkillSection />
            {/* our service */}
            <TestimonialsSection />
            <ScholarshipUpdates />
            <InsightsSection />
            <NewSection />
        </main>
    );
}
