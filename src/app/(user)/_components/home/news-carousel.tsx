'use client';
import { b2wiNewsData } from '@/lib/db/b2wi-news';
import Glide from '@glidejs/glide';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTags } from 'react-icons/fa6';

export default function NewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const carouselContentArray = b2wiNewsData;

    useEffect(() => {
        setLoading(false);
        const slider = new Glide('.glide-05', {
            type: 'carousel',
            focusAt: 0,
            perView: 3,
            autoplay: 4800,
            animationDuration: 700,
            gap: 35,
            breakpoints: {
                1249: {
                    perView: 3,
                },
                750: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        });

        // Listen to the "move" event to update the active indicator
        slider.on('move', () => {
            setCurrentIndex(slider.index);
        });

        slider.mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-xl">loading...</p>
                </div>
            )}
            <div
                className={`glide-05 relative w-full ${
                    loading ? 'opacity-0' : ''
                }`}
            >
                {/* Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {carouselContentArray.map((news) => (
                            <li
                                key={news.id}
                                className="group relative border rounded-lg"
                            >
                                <figure className="w-full sm:h-[280px] h-[200px] rounded-lg">
                                    <Image
                                        width={350}
                                        height={240}
                                        alt={news.title}
                                        src={`/images/news/${news.imgUrl}`}
                                        className="w-full h-full object-cover object-center rounded-lg"
                                    />
                                </figure>
                                {/* news cart details */}
                                <div className="group/subSection mt-3 absolute -bottom-64 group-hover:bottom-0 duration-200 left-0 w-full bg-[#264d88dc] rounded-b-lg p-6">
                                    <div className="flex items-center gap-1 text-xs mb-3 text-neutral-300/80">
                                        <Link href={news.slug} target="_blank">
                                            <FaTags />
                                        </Link>
                                        <h3>
                                            <Link
                                                href={news.slug}
                                                target="_blank"
                                            >
                                                {news.publishedIn}
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-neutral-300 text-sm mb-1">
                                        <Link href={news.slug} target="_blank">
                                            {news.publishedOn}
                                        </Link>
                                    </p>
                                    <h2 className="text-base font-semibold text-neutral-100 group-hover/subSection:underline duration-150 my-2">
                                        <Link href={news.slug} target="_blank">
                                            {news.title}
                                        </Link>
                                    </h2>

                                    <Link href={news.slug} target="_blank">
                                        <button className=" text-base text-neutral-300 flex items-center gap-1 group-hover/subSection:gap-4 duration-150">
                                            Read More{' '}
                                            <span className="">{'>'}</span>
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Indicators */}
                <div
                    className="flex w-full items-center justify-center gap-2 mt-4"
                    data-glide-el="controls[nav]"
                >
                    {carouselContentArray.map((data, index) => (
                        <button
                            key={index}
                            className={`group p-2 `}
                            data-glide-dir={`=${index}`}
                            aria-label={`goto slide ${index + 1}`}
                        >
                            <span
                                className={`block h-2 w-2 rounded-full transition-colors duration-300 overflow-hidden ring-1  ${
                                    currentIndex === index
                                        ? 'bg-[#013458] dark:bg-white dark:ring-white'
                                        : 'ring-primary dark:ring-white'
                                }`}
                            ></span>
                        </button>
                    ))}
                </div>
            </div>
            {/*<!-- End Carousel with indicators outside --> */}
        </div>
    );
}
