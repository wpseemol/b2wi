import { b2wiNewsData } from '@/lib/db/b2wi-news';
import NewsCard from './news-card';

export default function MediaCoverageNews() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {b2wiNewsData.map((content) => (
                <NewsCard key={content.id} content={content} />
            ))}
        </div>
    );
}
