import Image from 'next/image';
import MissionVisionAccordion from './mission-vision-accordion';

export default function OurMissionVision() {
    return (
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-x-14 mb-14 ">
            <div>
                <div className="sm:col-span-2 mb-5 px-2 sm:px-0">
                    <h2 className="sm:text-4xl text-2xl font-bold sm:text-left text-center">
                        Our Mission and Vision
                    </h2>
                </div>
                <MissionVisionAccordion />
            </div>

            <div>
                <figure>
                    <Image
                        src="/images/fb-4@2x.jpg"
                        alt="mission and vision."
                        width={550}
                        height={530}
                        className=""
                    />
                </figure>
            </div>
        </section>
    );
}
