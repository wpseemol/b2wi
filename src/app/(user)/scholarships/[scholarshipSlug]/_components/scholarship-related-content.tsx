import { scholarshipsData } from '@/lib/db/scholarships-data';
import ScholarshipsCard from '../../_components/scholarships-card';

export default function ScholarshipRelatedContent({ slug }: { slug: string }) {
    const sliceContent = scholarshipsData.slice(0, 3);

    const showContent = sliceContent.filter((story) => story.slug !== slug);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {showContent.map((content) => (
                <ScholarshipsCard
                    key={content.id}
                    content={content}></ScholarshipsCard>
            ))}
        </div>
    );
}
