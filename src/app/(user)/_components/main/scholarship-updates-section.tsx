import AllScholarshipUpdatesBtn from './all-scholarship-updates-btn';
import ScholarshipUpdatesCarousel from './scholarship-updates-carousel';

export default function ScholarshipUpdates() {
    return (
        <section className="container mx-auto md:px-0 px-2 mb-8 ">
            <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-3 mb-5">
                <div>
                    {/* <h3 className="text-2xl text-[#0976c4] font-semibold">
                        Insights & Inspirations
                    </h3> */}
                    <h2
                        className="md:text-[40px] text-4xl font-bold text-[#004679]
                    dark:text-neutral-100
                    ">
                        Scholarship Updates
                    </h2>
                </div>
                {/* button link direct */}
                <AllScholarshipUpdatesBtn>
                    Read all Scholarship Updates
                </AllScholarshipUpdatesBtn>
            </div>
            {/* slider section */}
            <ScholarshipUpdatesCarousel />
        </section>
    );
}
