import { testimonials } from '@/lib/db/testimonial-data';
import SuccessStoriesTestimonialsCard from './success-stories-testmonial-card';

export default function SuccessStoriesContent() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {testimonials.map((stories) => (
                <SuccessStoriesTestimonialsCard
                    content={stories}
                    key={stories.id}
                />
            ))}
        </div>
    );
}
