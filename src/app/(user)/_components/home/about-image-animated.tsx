'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutImageAnimated() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Animation starts when 50% of the component is visible
    });

    return (
        <Image
            ref={ref}
            src="/images/About Us - Home Page.png"
            width={515}
            height={537}
            alt="Project image"
            className={`w-full sm:h-[300px] rounded-xl object-cover object-center  ${
                inView ? 'animate-jump animate-once' : ''
            }`}
        />
    );
}
