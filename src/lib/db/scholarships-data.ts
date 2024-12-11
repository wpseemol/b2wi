export const scholarshipsData: ScholarshipsDataType[] = [
    {
        id: 1,
        slug: 'daad-scholarships-germany',
        title: 'DAAD Scholarships (Germany)',
        publishedOn: 'October 8, 2024',
        imgUrl: '3-1DAAD Scholarships (Germany).png',
        publishedIn: 'Apply Early Scholarships',
        description: `<ul class="wp-block-list" style="margin-top: 0px; margin-bottom: 10px; color: #626262; font-size: 16px; letter-spacing: normal;">
<li><strong>Eligibility</strong>: For graduates, doctoral candidates, and postdocs from Bangladesh applying to universities in Germany.</li>
<li><strong>Application Deadline</strong>: October 31, 2024</li>
<li><strong>Scholarship Amount</strong>: Full or partial scholarships covering tuition and living expenses.</li>
<li><strong>How We Help</strong>: B2W provides <strong>SOP reviews</strong> and <strong>LoR formatting tips</strong>, as well as guidance on the <strong>visa process</strong> for Germany.</li>
</ul>`,
    },
    {
        id: 2,
        slug: 'fulbright-foreign-student-program-usa',
        title: 'Fulbright Foreign Student Program (USA)',
        imgUrl: 'Fulbright Foreign Student Program (USA).png',
        publishedOn: 'October 8, 2024',
        publishedIn: 'Apply Early Scholarships',
        description: `<ul class="wp-block-list" style="margin-top: 0px; margin-bottom: 10px; color: rgb(98, 98, 98); font-size: 16px; letter-spacing: normal;"><li><strong>Eligibility</strong>: Open to students from Bangladesh applying for graduate studies in the US.</li><li><strong>Application Deadline</strong>: Varies by country</li><li><strong>Scholarship Amount</strong>: Full tuition, living expenses, airfare, and health insurance.</li><li><strong>How We Help</strong>: B2W assists with&nbsp;<strong>profiling your academic achievements</strong>, writing a&nbsp;<strong>persuasive personal statement</strong>, and providing&nbsp;<strong>interview preparation</strong>.</li></ul>`,
    },
    {
        id: 3,
        slug: 'chevening-scholarships-uk',
        title: 'Chevening Scholarships (UK)',
        imgUrl: 'Chevening Scholarships (UK).png',
        publishedOn: 'October 8, 2024',
        publishedIn: 'Apply Early Scholarships',
        description: `<ul class="wp-block-list" style="margin-top: 0px; margin-bottom: 10px; color: rgb(98, 98, 98); font-size: 16px; letter-spacing: normal;"><li><strong>Eligibility</strong>: Open to students from Bangladesh applying for a Master’s degree in the UK.</li><li><strong>Application Deadline</strong>: November 7, 2024</li><li><strong>Scholarship Amount</strong>: Full tuition, living expenses, airfare, and visa costs.</li><li><strong>How We Help</strong>: B2W offers guidance on&nbsp;<strong>writing the required essays</strong>, gathering&nbsp;<strong>strong LoRs</strong>, and&nbsp;<strong>preparing for interviews</strong>&nbsp;to increase your chances of winning this prestigious scholarship.</li></ul>`,
    },
];

export interface ScholarshipsDataType {
    id: string | number;
    slug: string;
    title: string;
    imgUrl: string;
    publishedOn: string;
    publishedIn: string;
    description: string;
}
