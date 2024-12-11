import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NewsCarousel from './news-carousel';

export default function NewSection() {
    return (
        <section className="container mx-auto md:px-0 px-2 mb-8">
            <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-3 mb-5">
                <div>
                    {/* <h3 className="text-2xl text-[#0976c4] font-semibold">
                        Insights & Inspirations
                    </h3> */}
                    <h2
                        className="md:text-[40px] text-4xl font-bold text-[#004679]
                    dark:text-neutral-100
                    ">
                        B2WI In the News
                    </h2>
                </div>

                <Link href={'/media-coverage'}>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
                        View All
                    </Button>
                </Link>
            </div>
            <NewsCarousel />
        </section>
    );
}
