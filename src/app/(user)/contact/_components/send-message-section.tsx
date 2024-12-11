import SubjectDropdown from './subject-dropdown';

export default function SendMessageSection() {
    return (
        <div className=" md:col-span-2  h-full md:p-5 md:pb-0 p-2 pb-0">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800/85 ">
                Send A Message
            </h2>
            <form
                action=""
                className="grid sm:grid-cols-2 grid-cols-1 gap-x-4 sm:gap-y-8 gap-y-3"
            >
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Phone Number"
                    className="border focus-visible:outline-none p-3"
                    required
                />

                <SubjectDropdown />

                <textarea
                    name="your-message"
                    id="your-message"
                    placeholder="Your Message"
                    rows={4}
                    cols={50}
                    required
                    className="sm:col-span-2 border focus-visible:outline-none p-3"
                ></textarea>
                <button
                    type="submit"
                    className="sm:col-span-2 border focus-visible:outline-none bg-primary text-white py-3 font-medium "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
