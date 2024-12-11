import CountupAnimation from './countup-animation';

export default function ProjectDoneNumbering() {
    return (
        <section className="bg-skill-numbering mb-8 bg-fixed bg-center min-h-[280px] flex flex-col justify-center relative">
            <div className="container mx-auto md:px-0 px-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-1 gap-1 relative z-10">
                {numberWorks.map((work) => (
                    <div
                        key={work.id}
                        className="flex flex-col justify-center items-center md:py-10 py-7 cursor-pointer group">
                        <h2 className=" text-6xl font-bold text-neutral-100 group-hover:scale-105 duration-150 mb-3">
                            <CountupAnimation wNumber={work.wNumber} />
                            {work.symbol}
                        </h2>
                        <h3 className="text-neutral-100 dark:text-neutral-100/80 text-lg font-medium">
                            {work.title}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00385f73] dark:bg-[#1830477a]"></div>
        </section>
    );
}

const numberWorks: NumberWorks[] = [
    { id: 1, wNumber: 3000, symbol: '+', title: 'University Partnerships' },
    { id: 2, wNumber: 60, symbol: '+', title: 'Scholarships' },
    { id: 3, wNumber: 500, symbol: '+', title: 'Free Assessments' },
    { id: 4, wNumber: 150, symbol: '+', title: 'Hours’ Free Consultation' },
    // { id: 5, wNumber: 30, symbol: '+', title: 'Life Coaching Clients' },
    // { id: 6, wNumber: 25, symbol: '+', title: 'Instructors & Mentors' },
    // { id: 7, wNumber: 9, symbol: '', title: 'National Certifications' },
    // { id: 8, wNumber: 3, symbol: '', title: 'Projects with Dev Orgs' },
];

interface NumberWorks {
    id: number;
    wNumber: number;
    symbol: string;
    title: string;
}
