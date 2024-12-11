import Image from 'next/image';

export default function OurMissionVision() {
    return (
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-x-14 mb-14 ">
            <div>
                <div className="sm:col-span-2 mb-5 px-2 sm:px-0">
                    <h2 className="sm:text-4xl text-2xl font-bold sm:text-left text-center">
                        Our Mission and Vision
                    </h2>
                </div>
                <div className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white">
                    <details className="group p-4" open>
                        <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                            Mission
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title-ac21 desc-ac21">
                                <title id="title-ac21">Open icon</title>
                                <desc id="desc-ac21">
                                    icon that represents the state of the
                                    summary
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </summary>
                        <p className="mt-4 text-slate-700">
                            At B2W, our mission is not just about helping
                            students pursue higher education abroad—it’s about
                            creating a global network of Bangladeshi leaders who
                            will make a difference on the world stage.
                        </p>
                    </details>
                    <details className="group p-4">
                        <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                            Vision
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title-ac22 desc-ac22">
                                <title id="title-ac22">Open icon</title>
                                <desc id="desc-ac22">
                                    icon that represents the state of the
                                    summary
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </summary>
                        <p className="mt-4 text-slate-700">
                            Our vision is to help students rise to new heights
                            while showcasing the talent and potential of
                            Bangladesh in the global academic and professional
                            communities.
                        </p>
                    </details>
                    <details className="group p-4">
                        <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                            Qualified Instructors
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                aria-labelledby="title-ac24 desc-ac24">
                                <title id="title-ac24">Open icon</title>
                                <desc id="desc-ac24">
                                    icon that represents the state of the
                                    summary
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </summary>
                        <p className="mt-4 text-slate-700">
                            We believe that through continuous support, from
                            profile assessment guidance to university selection
                            to settling down abroad, we can help students
                            overcome challenges and thrive, wherever their
                            academic journey takes them. As mentioned earlier,
                            our long-term goal is to create positive change not
                            only in individual lives but also in how Bangladesh
                            is represented globally.
                        </p>
                    </details>
                </div>
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
