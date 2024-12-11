import { scholarshipsData } from '@/lib/db/scholarships-data';
import ScholarshipsCard from './scholarships-card';

export default function ScholarshipsContents() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {scholarshipsData.map((content) => (
                <ScholarshipsCard
                    key={content.id}
                    content={content}></ScholarshipsCard>
            ))}
        </div>
    );
}
