import { hackContents } from '@/lib/db/hacks-data';
import HacksCard from '../../_components/hacks-card';

export default function HackRelatedContents({ slug }: { slug: string }) {
    const sliceContent = hackContents.slice(0, 3);

    const showContent = sliceContent.filter((content) => content.slug !== slug);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {showContent.map((content) => (
                <HacksCard content={content} key={content.id} />
            ))}
        </div>
    );
}
