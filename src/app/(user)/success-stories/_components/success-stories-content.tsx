import { successStories } from '@/lib/db/success-stories';
import SuccessStoriesCard from './success-stories-card';

export default function SuccessStoriesContent() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {successStories.map((stories) => (
                <SuccessStoriesCard storiesDetails={stories} key={stories.id} />
            ))}
        </div>
    );
}
