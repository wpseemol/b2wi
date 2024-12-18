import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function MissionVisionAccordion() {
    const statusActive = ourMissionVisionContent.find((item) => item.status);

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue={`item-${statusActive?.id}`}
            className="md:w-[45rem] w-full mx-auto px-2 sm:px-0"
        >
            {ourMissionVisionContent.map((content) => (
                <AccordionItem value={`item-${content.id}`} key={content.id}>
                    <AccordionTrigger className="md:mr-5 text-lg font-semibold">
                        {content.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:mr-3">
                        {content.description}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

const ourMissionVisionContent: OurMissionVisionType[] = [
    {
        id: 1,
        title: 'Mission',
        description: `At B2W, our mission is not just about helping students pursue higher education abroad—it’s about creating a global network of Bangladeshi leaders who will make a difference on the world stage.`,
        status: true,
    },
    {
        id: 2,
        title: 'Vision',
        description: `Our vision is to help students rise to new heights while showcasing the talent and potential of Bangladesh in the global academic and professional communities.`,
        status: false,
    },
    {
        id: 3,
        title: 'Qualified Instructors',
        description: `We believe that through continuous support, from profile assessment guidance to university selection to settling down abroad, we can help students overcome challenges and thrive, wherever their academic journey takes them. As mentioned earlier, our long-term goal is to create positive change not only in individual lives but also in how Bangladesh is represented globally.`,
        status: false,
    },
];

export interface OurMissionVisionType {
    id: number | string;
    title: string;
    description: string;
    status: boolean;
}
