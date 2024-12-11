import { hackContents } from '@/lib/db/hacks-data';
import HacksCard from './hacks-card';

export default function HacksContent() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {hackContents.map((content) => (
                <HacksCard key={content.id} content={content} />
            ))}
        </div>
    );
}
