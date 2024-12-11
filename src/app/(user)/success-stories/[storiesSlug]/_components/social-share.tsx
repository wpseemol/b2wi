'use client';
import { HackContentType } from '@/lib/db/hacks-data';
import { ScholarshipsDataType } from '@/lib/db/scholarships-data';
import { SuccessStoriesType } from '@/lib/db/success-stories';
import { usePathname } from 'next/navigation';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

export default function SocialShare({
    content,
}: {
    content: SuccessStoriesType | ScholarshipsDataType | HackContentType;
}) {
    const pathname: string = usePathname();

    const title: string = content.title; // Optional text to share along with the link

    return (
        <div className="flex items-center gap-4 mt-8">
            <h3 className="font-semibold text-primary">Share</h3>
            <FacebookShareButton
                url={pathname}
                // quote={title} // Optional

                hashtag="#b2wi" // Optional hashtag
            >
                {/* Facebook Icon */}
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            {/* Twitter Share Button */}
            <TwitterShareButton
                url={pathname}
                title={title} // Optional title to share along with the link
                hashtags={['b2wi']} // Optional hashtags
            >
                {/* Twitter Icon */}
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            {/* Pinterest Share Button */}
            <PinterestShareButton
                url={pathname}
                media={`/images/people-behind/${content.imgUrl}`}
                description={title}
            >
                {/* Pinterest Icon */}
                <PinterestIcon size={40} round={true} />
            </PinterestShareButton>

            {/* LinkedIn Share Button */}
            <LinkedinShareButton
                url={pathname}
                title={title} // Optional title to share along with the link
                source="b2wi" // Optional source to indicate the origin
            >
                {/* LinkedIn Icon */}
                <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
        </div>
    );
}
