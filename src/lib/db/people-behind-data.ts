export const peopleBehind: PeopleBehind[] = [
    {
        id: 1,
        socialLink:
            'https://www.linkedin.com/in/msaimumhossain?originalSubdomain=ca',
        imageUrl: 'Mr.-Saimum.png',
        name: 'Md Saimum Hossain',
        description:
            '<p>With over a decade of professional experience spanning higher education, consulting, financial services, advertising, technology, and entrepreneurship, M Saimum Hossain is an “entrepreneur who teaches” with a commitment to bridging academic and industry expertise.</p><p>An MBA from Canada’s #1 business school Ivey Business School at Western University, he is currently an Assistant Professor at the Department of Finance, University of Dhaka, where he also serves as Coordinator for Industry-Academic Partnerships. In this role, he focuses on enriching student learning experiences through corporate engagement, industry visits, and workshops led by business leaders. Saimum’s diverse career spans roles in consulting and project management, with a strong emphasis on strategic business transformation, particularly in the Bangladeshi market.</p>',
    },
    {
        id: 2,
        socialLink: null,
        imageUrl: 'Asif-Imtiaz.png',
        name: 'Asif Imtiaz',
        description:
            '<p>Asif Imtiaz is a PhD candidate in Health Policy and Health Economics at LSE. With an MSc in International Health Policy (Health Economics) from LSE and prior degrees in Economics from the University of Dhaka, he is currently an Assistant Professor in Dhaka’s Department of Management Information Systems. Asif has substantial research and consultancy experience, including roles at PMIS and LSE Health, as well as consulting for Westminster City Council on digital inclusion and for Bangladesh’s outsourcing sector. His research focuses on quality of care, health-seeking behaviour, and public health in low- and middle-income countries.</p>',
    },
    {
        id: 3,
        name: 'Suman Saha',
        socialLink: 'https://www.linkedin.com/in/suman-saha-bd/',
        imageUrl: 'suman saha.png',
        description:
            '<p>With over a decade of experience in the education sector and more than five years in the study abroad industry, Suman Saha is a dedicated advocate for empowering Bangladeshi students on their academic journeys. Specializing in student counseling and international education exchange programs, he has successfully guided numerous students to pursue their dreams abroad. At B2WI, Suman’s in-depth expertise and commitment help students navigate the complexities of global education. His passion for fostering academic success aligns with B2WI’s mission of building a network of global Bangladeshi leaders and amplifying Bangladesh’s presence on the world stage.</p>',
    },
    {
        id: 4,
        name: 'Md Sajjad Hossain',
        socialLink: null,
        imageUrl: 'Md-Sajjad-Hossain.png',
        description:
            '<p>Currently, a PhD candidate at Ted Rogers School of Management, Toronto Metropolitan University (TMU), Md Sajjad Hossain has diverse experience in university-level teaching, research, consultancy, and entrepreneurship. Mr. Sajjad also completed a research-based Masters degree from TMU (former Ryerson University) in 2022. He has 9+ years of active teaching experience in post-secondary settings in Canada and Bangladesh combined, has worked in organizations like Standard Chartered Bank, Grameen Phone (Telenor), East West University, Canadian Automobile Association, and TMU, and has worked on high-value consultancy projects over the years with clients like Thai Airways and The World Bank. Mr. Sajjad is also a seasoned researcher and has published several scholarly works in high-ranked peer-reviewed journal outlets. At B2WI, he intends to exploit all his experiences and guide aspiring students from Bangladesh to secure admission and settle smoothly in their higher study destinations.</p>',
    },
    {
        id: 5,
        name: 'Sameer Ghazi Rahman',
        socialLink: 'https://www.linkedin.com/in/sgr1981/',
        imageUrl: 'Sameer Ghazi Rahman image.png',
        description:
            '<p>Managing Director of Sunshine Education Bangladesh Western Australia (SEBWA), Principal at Sunshine Grammar School, and Founder & CEO of Global Education Expert, Sameer brings extensive expertise in international education and student counseling. With a deep understanding of education management and global study placements, he plays a pivotal role at B2WI in guiding Bangladeshi students through their academic journeys abroad. His leadership and strategic insights in study and job placements empower students to represent Bangladesh on the global stage, in line with B2WI’s mission of building a network of Bangladeshi leaders worldwide.</p>',
    },
    {
        id: 6,
        name: 'Muhaiminul Islam Antik',
        socialLink: 'https://www.linkedin.com/in/muhaiminul-islam-ig/',
        imageUrl: 'Muhaiminul-Islam.png',
        description:
            '<p>An experienced professional in content development, marketing, and international education, Muhaiminul Islam is dedicated to empowering students and youth to thrive academically and professionally. With expertise in content creation, social media management, demand generation, and strategic marketing, he has successfully driven engagement and growth across diverse organizations. Muhaiminul’s commitment to skill development and global connections aligns seamlessly with the mission of fostering educational success and international representation.</p>',
    },
];

export interface PeopleBehind {
    id: number | string;
    name: string;
    imageUrl: string;
    socialLink: null | string;
    description: string;
}
