import TestimonialContentCard from '@/components/testimonial-content-card';
import { testimonials } from '@/lib/db/testimonial-data';

export default function SuccessStoriesContent() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {testimonials.map((stories) => (
                <TestimonialContentCard content={stories} key={stories.id} />
            ))}
        </div>
    );
}
