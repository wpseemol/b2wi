'use client';

import { Fragment, useEffect, useState } from 'react';

const getDescription = (
    id: string,
    ourStoryContent: OurStoryContent[]
): string | null => {
    const story = ourStoryContent.find((story) => story.id === id);
    return story ? story.description : null;
};

export default function AboutTabSection() {
    const [selectedStory, setSelectedStory] = useState<string>('our-story');
    const [selectedDescription, setSelectedDescription] = useState<
        string | null
    >(getDescription('our-story', ourStoryContent));

    useEffect(() => {
        setSelectedDescription(getDescription(selectedStory, ourStoryContent));
    }, [selectedStory]);

    return (
        <section className="my-10">
            <h2 className="text-neutral-900/85 dark:text-white sm:text-[52px] text-3xl font-bold leading-snug text-center mb-4">
                Our<span className="text-primaryColor"> Story</span>
            </h2>

            <div className="flex items-center sm:-mx-4 mx-0 justify-center sm:flex-nowrap flex-wrap  dark:text-gray-800 border-b border-black relative z-0 dark:bg-transparent">
                {ourStoryContent.map((story) => (
                    <Fragment key={story.id}>
                        <button
                            rel="noopener noreferrer"
                            onClick={() => setSelectedStory(story.id)}
                            className={`${
                                selectedStory === story.id
                                    ? 'border border-black border-b-0 rounded-t-lg font-semibold'
                                    : 'border border-transparent'
                            } flex items-center flex-shrink-0 sm:px-5 px-2 py-3 space-x-2 dark:text-gray-400 relative sm:text-base text-sm `}>
                            {selectedStory === story.id && (
                                <span className="absolute w-full bg-white dark:bg-[#030712] h-2 -bottom-1 left-0 z-10"></span>
                            )}
                            <span>{story.title}</span>
                        </button>
                    </Fragment>
                ))}
            </div>

            {selectedDescription && (
                <section className="p-4 space-y-5">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: selectedDescription,
                        }}
                        className="space-y-5"
                    />
                </section>
            )}
        </section>
    );
}

const ourStoryContent: OurStoryContent[] = [
    {
        id: 'our-story',
        title: 'Our Story',
        description:
            '<p>The Bangladesh 2 the World (B2W) Initiative is a passionate commitment to empowering Bangladeshi talent (students and professionals alike) and enabling them to represent Bangladesh on the global academic and professional stage.</p>',
    },
    {
        id: 'who-are-we',
        title: 'Who Are We',
        description:
            '<p>We’re a team of seasoned education professionals and alumni of top-tier foreign universities from Canada, UK, Australia, and Europe who have navigated the paths of global academic and professional stages themselves.</p>',
    },
    {
        id: 'why-did-we-decide-to-start-B2W-Initiative?',
        title: 'Why did we decide to start B2W Initiative?',
        description:
            '<p>Numerous studies have surmised that graduate unemployment in Bangladesh is one of the highest in the world. In a country where there is the gift of “Demographic Dividend”, Bangladesh is failing miserably to take benefit of the Demographic Dividend with reported graduate unemployment rates as high as 38.6%.</p><p>According to the Bangladesh Bureau of Statistics (BBS), nearly 800,000 graduates were unemployed by the end of 2022, reflecting an unemployment rate of 12% among tertiary-educated individuals, which is the highest across all education levels.</p><p>Although there are many factors contributing to this high level of graduate unemployment rates, one of the primary reasons is the economy’s limited capacity to create good jobs. Each year, Bangladesh produces a substantial number of graduates, with estimates indicating that around 2 million new graduates enter the job market annually. This influx significantly outpaces job creation efforts, contributing to high levels of unemployment among the educated youth.</p><p>This is one of the backdrops of launching B2W Initiative whereby we want to create global opportunities for our graduates and through that, we not only create positive change in individual lives but also in how Bangladesh is represented globally.</p>',
    },
];

interface OurStoryContent {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    backgroundImage?: string;
}
