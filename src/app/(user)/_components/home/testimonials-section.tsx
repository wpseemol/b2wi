import TestimonialSlider from './testimonial-slider';

export default function TestimonialsSection() {
    return (
        <section className="container mx-auto md:px-0 px-2 md:mb-20 md:pb-20 sm:mb-[19rem] mb-[18rem]">
            <div className="">
                <h2 className="text-center sm:text-[40px] sm:font-bold text-4xl font-semibold text-[#00355a] dark:text-neutral-100 mb-4">
                    Trusted by
                    <span className="text-[#0070c0]">
                        {' '}
                        Students and Professionals
                    </span>
                </h2>
                {/* <p className="text-center text-neutral-700/85 dark:text-neutral-300 font-medium text-base">
                    A deep commitment to diversity and inclusion
                </p> */}
            </div>
            <div className="relative max-h-[350px]">
                <TestimonialSlider />
            </div>
        </section>
    );
}
