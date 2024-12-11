export const successStories: SuccessStoriesType[] = [
    {
        id: 1,
        slug: 'how-to-maximize-your-scholarship-chances',
        title: 'How to Maximize Your Scholarship Chances',
        imgUrl: 'How to Maximize Your Scholarship Chances.png',
        publishIn: 'Study Abroad Hacks',
        publishOn: 'October 8, 2024',
        description: `<ol>
            <li><b>Research Early: </b>Many scholarships have deadlines far in advance of university applications. Begin your search at least a year before applying.</li>
            <li><b>Apply to Multiple Scholarships: </b> Increase your chances of receiving financial aid by applying to as many relevant scholarships as possible.</li>
            <li><b>Write a Stellar Personal Statement: </b> Highlight your need for financial aid and how receiving the scholarship will help you achieve your goals.</li>
            <li><b>Get Strong Recommendations: </b>Request letters of recommendation from people who know your strengths and can vouch for your academic potential.</li>
            <li><b>Follow Instructions Carefully: </b>Ensure that your application materials follow the scholarship guidelines exactly. This includes word limits, formatting, and required documents.</li>
            </ol>`,
    },
    {
        id: 2,
        slug: 'top-3-mistakes-to-avoid-in-your-visa-application',
        title: 'Top 3 Mistakes to Avoid in Your Visa Application',
        imgUrl: 'Top 3 Mistakes to Avoid in Your Visa Application.png',
        publishIn: 'Study Abroad Hacks',
        publishOn: 'October 8, 2024',
        description: `<ol>
            <li><b>Missing Documents: </b>Always double-check the required documents list for the specific country you’re applying to. Missing one document can delay your visa.</li>
            <li><b>Inaccurate Information: </b>Make sure all personal details, especially your name and passport number, are accurate and match your official documents.</li>
            <li><b>Submitting Late: </b>Visa processing can take time, so submit your application as early as possible to avoid delays.</li>
            </ol>`,
    },
    {
        id: 3,
        slug: '5-tips-for-writing-a-winning-sop',
        title: '5 Tips for Writing a Winning SOP',
        imgUrl: '5 Tips for Writing a Winning SOP.png',
        publishIn: 'SOP Review',
        publishOn: 'October 8, 2024',
        description: `<ol>
            <li><b>Start Early: </b>Begin drafting your SOP well ahead of the deadline so you have ample time to revise and get feedback.</li>
            <li><b>Personalize Your Story: </b>Focus on why you are passionate about your field of study and what experiences have shaped your academic interests.</li>
            <li><b>Highlight Your Strengths: </b>Make sure to showcase your skills, achievements, and how they align with the university’s program.</li>
            <li><b>Match Your Goals with the University: </b>Research the university’s strengths and explain how they fit with your career ambitions.</li>
            <li><b>Get Feedback: </b>Have someone with experience in international applications review your SOP to ensure it is clear and compelling.</li>
            </ol>`,
    },
];

export interface SuccessStoriesType {
    id: number | string;
    slug: string;
    title: string;
    imgUrl: string;
    publishIn: string;
    publishOn: string;
    description: string;
}
