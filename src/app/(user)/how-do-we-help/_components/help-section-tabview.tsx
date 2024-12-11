'use client';

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';

// Function to find and return content by ID
const getDescription = (
    id: string,
    ourStoryContent: HelpTabContent[] // Updated to use the correct type
): HelpTabContent | null => {
    const story = ourStoryContent.find((story) => story.id === id);
    return story || null; // Return null if no match is found
};

export default function HelpSectionTabView() {
    const [selectedStory, setSelectedStory] = useState<string>('LOR-review');
    const [selectedHelpContent, setSelectedHelpContent] =
        useState<HelpTabContent | null>(
            getDescription('LOR-review', helpTabContent)
        );

    useEffect(() => {
        setSelectedHelpContent(getDescription(selectedStory, helpTabContent));
    }, [selectedStory]);

    return (
        <section className="container mx-auto my-10">
            {/* Tab button styles */}
            <div className="flex items-center sm:-mx-4 mx-0 justify-center sm:flex-nowrap flex-wrap dark:text-gray-800 border-b relative z-0 dark:bg-transparent">
                {helpTabContent.map((story) => (
                    <Fragment key={story.id}>
                        <button
                            onClick={() => setSelectedStory(story.id)}
                            className={`${
                                selectedStory === story.id
                                    ? 'border border-b-0 rounded-t-lg'
                                    : 'border border-transparent'
                            } flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:text-gray-400 relative`}>
                            {selectedStory === story.id && (
                                <span className="absolute w-full bg-white dark:bg-[#030712] h-2 -bottom-1 left-0 z-10"></span>
                            )}
                            <span>{story.tabTitle}</span>
                        </button>
                    </Fragment>
                ))}
            </div>

            {selectedHelpContent && (
                <section className="p-4 space-y-5 grid md:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col justify-center gap-y-5 pr-5">
                        <h3 className="text-3xl font-semibold text-neutral-900/85 dark:text-neutral-100/90">
                            {selectedHelpContent.title}
                        </h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: selectedHelpContent.description,
                            }}
                            className="space-y-5 text-neutral-800/85 dark:text-neutral-200/90 text-lg"
                        />
                    </div>
                    <div>
                        <figure>
                            <Image
                                src={`/images/how-does-help/${selectedHelpContent.imageUrl}`}
                                alt={selectedHelpContent.title}
                                width={700}
                                height={450}
                                className="w-full h-full rounded"
                            />
                        </figure>
                    </div>
                </section>
            )}
        </section>
    );
}

const helpTabContent: HelpTabContent[] = [
    {
        id: 'LOR-review',
        tabTitle: 'LOR Review',
        title: 'LoR (Letter of Recommendation) Review',
        description:
            '<p>We provide insights on how to obtain and format effective recommendation letters from your mentors.</p>',
        imageUrl: 'LOR Review picture.png',
    },
    {
        id: 'visa-application-review',
        tabTitle: 'Visa Application Review',
        title: 'Visa Application Review',
        description:
            '<p>With visa procedures varying across countries, our experienced team will assist you in avoiding common pitfalls and ensuring a smooth process.</p>',
        imageUrl: 'Visa Application Review image.png',
    },
    {
        id: 'accommodation-assistance',
        tabTitle: 'Accommodation Assistance',
        title: 'Accommodation Assistance',
        description:
            '<p>We also offer resources to help you find safe, convenient, and affordable housing, so you can focus on your studies without the stress of relocation.</p>',
        imageUrl: 'Accommodation Assistance image.png',
    },
];

interface HelpTabContent {
    id: string;
    tabTitle: string;
    title: string;
    description: string;
    imageUrl?: string;
    backgroundImage?: string;
}
