export default function ScheduleCall() {
    return (
        <form action="" className="mt-6 mb-2">
            <div className="flex md:flex-row flex-col border md:w-fit w-full bg-white p-2 rounded-xl">
                <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="rounded-xl focus-visible:outline-none focus-visible:ring-1 md:w-[320px] w-full focus-visible:ring-neutral-800/15 pl-3 text-neutral-800 py-5 bg-white"
                    required
                />
                {/* <button
                    type="submit"
                    className="flex justify-center items-center bg-primary/70 hover:bg-primary duration-150 px-6 py-4 rounded-xl gap-1 font-medium">
                    <MdPhone className="text-lg" /> Schedule A Call
                </button> */}
            </div>
        </form>
    );
}
