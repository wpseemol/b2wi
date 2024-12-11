import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EventWorkshop() {
    return (
        <section className="mb-32 md:mb-20 bg-[#689bc0] dark:bg-[#172631] py-20 relative">
            <div className="container mx-auto  px-3 py-10 flex flex-col justify-center h-fit sm:px-2 ">
                <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-3 mb-8 h-fit">
                    <h2 className="md:text-[40px] text-4xl font-bold text-[#004679] dark:text-[#4e92c2]">
                        Events & Workshops
                    </h2>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary h-12 hover:bg-[#005694] hover:text-neutral-100/80 bg-transparent"
                    >
                        View All Events
                    </Button>
                </div>

                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {cartInfos.map((cardData) => (
                        <div
                            key={cardData.id}
                            className="h-[400px] bg-[#f8ffff] rounded-lg relative px-9 py-12 flex flex-col justify-between"
                        >
                            <div className="relative z-20 space-y-4">
                                <h2 className="text-4xl font-bold text-[#01406d] mb-10">
                                    {cardData.title}
                                </h2>
                                <span className="font-alex-brush text-xl">
                                    By
                                </span>
                                <h3 className="text-neutral-700/70">
                                    {cardData.name}
                                </h3>
                            </div>
                            <p className="relative z-20 text-[#0070c0]">
                                {cardData.date}
                            </p>
                            <Image
                                src="/images/Screenshot 2024-11-05 014853.png"
                                alt="bg-image"
                                width={300}
                                height={400}
                                className="w-auto h-auto rounded absolute bottom-0 right-0 z-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white dark:bg-[#030712] dark:border-primary rounded-xl px-8 py-10 flex md:flex-row flex-col md:gap-0 gap-3 justify-between absolute md:-bottom-[4rem] -bottom-[8rem] border shadow-2xl w-full container left-1/2 transform -translate-x-1/2 z-20">
                <p className="font-semibold text-neutral-800/95 dark:text-neutral-100/80 ">
                    Unlock your full potential with Empower Minds, where
                    innovation, empowerment,
                    <br /> and success converges to shape your brightest future.
                </p>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-primary h-12 bg-[#005694] text-neutral-100/80 "
                >
                    View All Events
                </Button>
            </div>
        </section>
    );
}

interface CartInfo {
    id: number;
    title: string;
    name: string;
    date: string;
}
const cartInfos: CartInfo[] = [
    {
        id: 1,
        title: 'Mental Health Session',
        name: 'Saleh Reza',
        date: 'February, 2024',
    },
    {
        id: 2,
        title: 'Career Planning Roadmap',
        name: 'Saleh Reza',
        date: 'January, 2024',
    },
    {
        id: 3,
        title: 'Business Fundamental Session',
        name: 'Saleh Reza',
        date: 'December, 2023',
    },
];
