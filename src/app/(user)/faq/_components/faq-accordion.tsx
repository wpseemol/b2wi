import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqAccordion() {
    const statusActive = faqAccordionContent.find((item) => item.status);

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue={`item-${statusActive?.id}`}
            className="md:w-[45rem] w-full mx-auto px-2 sm:px-0">
            {faqAccordionContent.map((content) => (
                <AccordionItem value={`item-${content.id}`} key={content.id}>
                    <AccordionTrigger>
                        {content.triggerContent}
                    </AccordionTrigger>
                    <AccordionContent>{content.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

const faqAccordionContent: faqAccordionContent[] = [
    {
        id: 1,
        triggerContent: 'Who can apply for B2W Initiative’s support?',
        content:
            'The B2W Initiative is open to Bangladeshi students and professionals who aspire to study or work abroad. Whether you are a recent high school graduate, a university student, or a working professional, we offer guidance tailored to your stage in life.',
        status: true,
    },
    {
        id: 2,
        triggerContent: 'How much does your support cost?',
        content:
            'B2W Initiative operates as a not-for-profit, and much of our support is offered at no cost, especially for basic guidance such as university selection, visa application reviews, and general advice. However, in certain cases, there may be minimal charges for more extensive services, such as intensive SOP revisions or specialized profile assessments. We strive to keep costs as low as possible to ensure that students from all backgrounds can access our support.',
        status: false,
    },
    {
        id: 3,
        triggerContent: 'What types of universities do you work with?',
        content:
            'We work with a global network of universities across 30+ countries, including top institutions in the US, UK, Canada, Australia, Germany, and more. Our database contains information on over 2,000 universities, helping you find programs that align with your academic and career goals.',
        status: false,
    },
    {
        id: 4,
        triggerContent: 'How do I get started with B2W Initiative?',
        content:
            'To get started, simply fill out the Profile Assessment Form on our website. After reviewing your details, one of our team members will reach out to discuss how we can help you on your journey. You can also contact us directly via email or phone for more information.',
        status: false,
    },
    {
        id: 5,
        triggerContent: 'Do you offer any financial aid or scholarships?',
        content:
            'While B2W Initiative does not provide direct financial aid, we offer extensive support in helping you find and apply for scholarships. We assist with scholarship research, application reviews, SOP writing, and recommendation letters to improve your chances of receiving funding.',
        status: false,
    },
];

interface faqAccordionContent {
    id: number | string;
    triggerContent: string;
    content: string;
    status: boolean;
}
