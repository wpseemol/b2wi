import OurSkillButton from './our-skill-button';

export default function OurSkillSection() {
    return (
        <section className="container mx-auto md:px-0 px-2 mb-8">
            <div>
                <h2 className="text-center sm:text-[40px] sm:font-bold text-4xl font-semibold text-[#00355a] dark:text-neutral-100 mb-5">
                    Empowering Students with{' '}
                    <span className="text-[#0070c0]">Global </span> Insights for{' '}
                    <span className="text-[#0070c0]"> Lasting Impact</span>
                </h2>
                <p className="text-center text-neutral-700/85 dark:text-neutral-300 font-medium text-xl">
                    Get expert guidance to thrive in global careers
                </p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                    {skills.map((skill) => (
                        <OurSkillButton key={skill.id} slug={skill.slug}>
                            <div
                                className="w-full md:h-[205px] h-[180px] rounded-2xl hover:scale-[1.01] duration-150 "
                                style={{
                                    backgroundImage: `url('/images/services/${skill.imgUrl}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div
                                    className=" w-full h-full flex items-end justify-center pb-6 text-neutral-100/90 text-2xl font-semibold rounded-2xl
                                bg-custom-gradient
                                "
                                >
                                    <h2 className="text-center">
                                        {skill.title}
                                    </h2>
                                </div>
                            </div>
                        </OurSkillButton>
                    ))}
                </div>
            </div>
        </section>
    );
}

const skills: skills[] = [
    {
        id: 1,
        slug: 'how-do-we-help',
        imgUrl: 'University Research Assistance 1.png',
        title: 'University Research Assistance',
    },
    {
        id: 2,
        slug: 'how-do-we-help',
        imgUrl: 'Profile Assessment 2.png',
        title: 'Profile Assessment',
    },
    {
        id: 3,
        slug: 'how-do-we-help',
        imgUrl: 'SOP Review 3.png',
        title: 'SOP Review ',
    },
    {
        id: 4,
        slug: 'how-do-we-help',
        imgUrl: 'LOR Review 4.png',
        title: 'LOR Review ',
    },
    {
        id: 5,
        slug: 'how-do-we-help',
        imgUrl: 'Visa Application Review 5.png',
        title: 'Visa Application Review ',
    },
    {
        id: 6,
        slug: 'how-do-we-help',
        imgUrl: 'Accommodation Assistance 6.png',
        title: 'Accommodation Assistance',
    },
    {
        id: 7,
        slug: 'how-do-we-help',
        imgUrl: 'Travel Assistance.webp',
        title: 'Travel Assistance',
    },
    {
        id: 8,
        slug: 'how-do-we-help',
        imgUrl: 'Scholarship Assistance.webp',
        title: 'Scholarship Assistance',
    },
    // {
    //     id: 7,
    //     imgUrl: '11.-Startup-Mentoring.png',
    //     title: 'Startup Mentoring',
    // },

    // {
    //     id: 8,
    //     imgUrl: '12.-HR-Solutions-1.png',
    //     title: 'HR Solutions',
    // },
    // {
    //     id: 9,
    //     imgUrl: '13.-Mental-Health-1.png',
    //     title: 'Mental Health',
    // },
    // {
    //     id: 10,
    //     imgUrl: '14.-Relationship.png',
    //     title: 'Relationships',
    // },
    // {
    //     id: 11,
    //     imgUrl: '15.-Conjugal-Life.png',
    //     title: 'Conjugal Life',
    // },
    // {
    //     id: 12,
    //     imgUrl: '16.-Life-Coach.png',
    //     title: 'Life Coach',
    // },
];

interface skills {
    id: number | string;
    slug: string;
    imgUrl: string;
    title: string;
}
