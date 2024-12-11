import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section
            className="container mx-auto md:px-0 px-2 flex 
        justify-center items-center lg:flex-nowrap flex-wrap md:gap-10 gap-5 mb-8">
            <div className="md:w-[30rem] flex justify-end">
                <figure className="w-full">
                    <Image
                        src="/images/About Us - Home Page.png"
                        width={515}
                        height={537}
                        alt="Project image"
                        className="w-full sm:h-[300px] rounded-xl object-cover object-center"
                    />
                </figure>
            </div>
            <div className="md:w-[30rem] space-y-5">
                <h2 className="sm:text-4xl text-3xl font-bold text-[#024f86] sm:text-left text-center">
                    About Us
                </h2>
                {/* <h3 className="text-lg font-semibold text-[#076eb8] sm:text-left text-center">
                    Develop leadership, efficiency, productivity, and <br />{' '}
                    excellence through our targeted training <br /> programs.
                </h3> */}
                <div className="text-neutral-700 -space-y-2 sm:text-left text-center">
                    <p className="text-lg font-normal">
                        The Bangladesh 2 the World (B2W) Initiative is a
                        passionate commitment to empowering Bangladeshi talent
                        (students and professionals alike) and enabling them to
                        represent Bangladesh on the global academic and
                        professional stage.
                    </p>
                </div>
                <div className="flex sm:justify-normal justify-center items-center ">
                    <Link href="/assessment">
                        <Button
                            size="lg"
                            variant="default"
                            className="bg-primaryColor/80 h-12 hover:bg-neutral-100/90 w-fit dark:text-neutral-100/80 text-neutral-100 hover:text-neutral-900/90 border border-[#0e588d] hover:border-neutral-900/90 ">
                            Free Assessment
                        </Button>
                    </Link>
                    {/* <Button
                        size="lg"
                        variant="outline"
                        className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
                        Training Programs
                    </Button> */}
                </div>
            </div>
        </section>
    );
}
