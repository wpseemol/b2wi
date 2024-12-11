import { HackContentType } from '@/lib/db/hacks-data';
import './hecks-custom-css.css';

export default function HackDetails({ content }: { content: HackContentType }) {
    return (
        <div className="text-neutral-800/75 dark:text-neutral-100 ">
            <div
                dangerouslySetInnerHTML={{ __html: content.title }}
                className="text-5xl font-semibold mb-8 text-neutral-800/90 dark:text-neutral-100"
            />

            <div className="flex items-center gap-10 mb-5">
                <div>
                    <h3 className="font-semibold text-neutral-800/85 dark:text-neutral-100">
                        Publish On:
                    </h3>
                    <p>{content.publishOn}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-neutral-800/85 dark:text-neutral-100">
                        Publish In:
                    </h3>
                    <p>{content.publishIn}</p>
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: content.description }}
                className="hackContainer "
            />
        </div>
    );
}
