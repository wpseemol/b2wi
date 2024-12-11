'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CountupAnimation({ wNumber }: { wNumber: number }) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Animation starts when 50% of the component is visible
    });

    return (
        <span ref={ref}>
            {inView ? <CountUp start={0} end={wNumber} /> : '0'}
        </span>
    );
}
