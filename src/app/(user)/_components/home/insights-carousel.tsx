'use client';
import { hackContents } from '@/lib/db/hacks-data';
import Glide from '@glidejs/glide';
import { useEffect, useState } from 'react';
import InsightsCarouselCard from './insights-carousel-card';

export default function InsightsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const carouserContentArray = hackContents;

    useEffect(() => {
        setLoading(false);
        const slider = new Glide('.insights-carousel', {
            type: 'carousel',
            focusAt: 0,
            perView: 3,
            autoplay: 3000,
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
                    <p className="text-xl text-white">loading...</p>
                </div>
            )}
            <div
                className={`insights-carousel relative w-full ${
                    loading ? 'opacity-0' : ''
                }`}
            >
                {/* Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {carouserContentArray.map((content) => (
                            <InsightsCarouselCard
                                content={content}
                                key={content.id}
                            />
                        ))}
                    </ul>
                </div>
                {/* Indicators */}
                <div
                    className="flex w-full items-center justify-center gap-2 mt-4"
                    data-glide-el="controls[nav]"
                >
                    {carouserContentArray.map((data, index) => (
                        <button
                            key={index}
                            className={`group p-2 `}
                            data-glide-dir={`=${index}`}
                            aria-label={`goto slide ${index + 1}`}
                        >
                            <span
                                className={`block h-2 w-2 rounded-full transition-colors duration-300 overflow-hidden ring-1 ring-primary ${
                                    currentIndex === index ? 'bg-[#013458]' : ''
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
