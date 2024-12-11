'use client';
import { useEffect, useState } from 'react';

export default function PeopleDetails({
    htmlContent,
    contentId,
}: {
    htmlContent: string;
    contentId: string | number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);

    const shoWord = 95;

    const words = htmlContent.split(/\s+/); // split by whitespace.
    const wordCount = words.length;

    const truncatedContent: string =
        wordCount > shoWord ? words.slice(0, shoWord).join(' ') : htmlContent;

    let showContent: string | TrustedHTML = isExpanded
        ? htmlContent
        : truncatedContent;

    showContent =
        wordCount > shoWord
            ? showContent +
              ` <button id='more-less-button-${contentId}' class='mt-2 text-primaryColor hover:underline dark:text-white sm:inline hidden'> ${
                  isExpanded ? 'Read Less...' : 'Read More...'
              } </button>`
            : showContent;

    useEffect(() => {
        setLoading(false);

        const buttonId = `more-less-button-${contentId}`;
        const button = document.getElementById(buttonId);

        const handleClick = () => {
            setIsExpanded((prev) => !prev);
            console.log(buttonId, 'is clicked');
        };

        if (button) {
            button.addEventListener('click', handleClick);
        }

        // Cleanup listener on component unmount
        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, [contentId, isExpanded, loading]);

    return loading ? (
        <div className="flex justify-center items-center">
            {' '}
            <p> Loading...</p>
        </div>
    ) : (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: showContent,
                }}
                className="space-y-2"
            />
            {wordCount > shoWord && (
                <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="mt-2 text-primaryColor hover:underline dark:text-white sm:hidden inline">
                    {' '}
                    {isExpanded ? 'Read Less...' : 'Read More...'}{' '}
                </button>
            )}
        </>
    );
}
