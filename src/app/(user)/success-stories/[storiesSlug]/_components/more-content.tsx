import { successStories } from '@/lib/db/success-stories';
import SuccessStoriesCard from '../../_components/success-stories-card';

export default function MoreContent({ slug }: { slug: string }) {
    const sliceContent = successStories.slice(0, 3);

    const showContent = sliceContent.filter((story) => story.slug !== slug);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {showContent.map((content) => (
                <SuccessStoriesCard storiesDetails={content} key={content.id} />
            ))}
        </div>
    );
}
