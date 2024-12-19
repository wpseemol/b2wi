import { CategoryHelpType } from '@/types/how-does-help';
import HelpCategoryCard from './help-category-card';

export default function HelpCategory() {
    return (
        <section className="container mx-auto mb-14">
            {/* <div>
                <h3></h3>
            </div> */}

            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-x-5 2xl:gap-y-5 gap-x-5 gap-y-7 px-2 sm:px-0">
                {categoryHelp.map((category) => (
                    <HelpCategoryCard key={category.id} content={category} />
                ))}
            </div>
        </section>
    );
}

const categoryHelp: CategoryHelpType[] = [
    {
        id: 1,
        title: 'University Research Assistance',
        imageUrl: '1.png',
        description:
            'Our database has information on over 2,000 universities across 30+ country destinations across the world. You can explore and find the initial information necessary from this database.',
    },
    {
        id: 2,
        title: 'Profile Assessment',
        imageUrl: '2.png',
        description:
            'You always know what’s best for your kid, so if a time comes when you need help, here’s one more thing to know: not all hospitals can deliver the same quality of care.',
    },
    {
        id: 3,
        title: 'SOP (Statement of Purpose) Review',
        imageUrl: '3.png',
        description:
            'You always know what’s best for your kid, so if a time comes when you need help, here’s one more thing to know: not all hospitals can deliver the same quality of care.',
    },
    {
        id: 4,

        title: 'LoR (Letter of Recommendation) Review',
        imageUrl: '4.png',
        description:
            'We provide insights on how to obtain and format effective recommendation letters from your mentors.',
    },
    {
        id: 5,

        title: 'Visa Application Review',
        imageUrl: '5.png',
        description:
            'With visa procedures varying across countries, our experienced team will assist you in avoiding common pitfalls and ensuring a smooth process.',
    },
    {
        id: 6,

        title: 'Accommodation Assistance',
        imageUrl: '6.png',
        description:
            'We also offer resources to help you find safe, convenient, and affordable housing, so you can focus on your studies without the stress of relocation.',
    },
    {
        id: 7,

        title: 'Travel Assistance',
        imageUrl: 'Travel Assistance.webp',
        description:
            'Simplify your study abroad journey with our expert travel planning and support.',
    },
    {
        id: 8,

        title: 'Scholarship Assistance',
        imageUrl: 'Scholarship Assistance.webp',
        description:
            'Unlock funding opportunities with personalized guidance to secure scholarships for your education.',
    },
];
