import { ScholarshipsDataType } from '@/lib/db/scholarships-data';
import './custom-style.css';

export default function ScholarshipSingleContent({
    content,
}: {
    content: ScholarshipsDataType;
}) {
    return (
        <div className="text-neutral-800/75 dark:text-neutral-100 ">
            <h2 className="text-5xl font-semibold mb-8 text-neutral-800/90 dark:text-neutral-100">
                {content.title}
            </h2>

            <div className="flex items-center gap-10 mb-5">
                <div>
                    <h3 className="font-semibold text-neutral-800/85 dark:text-neutral-100">
                        Publish On:
                    </h3>
                    <p>{content.publishedOn}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-neutral-800/85 dark:text-neutral-100">
                        Publish In:
                    </h3>
                    <p>{content.publishedIn}</p>
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: content.description }}
                className="scholarship-custom-css "
            />
        </div>
    );
}
