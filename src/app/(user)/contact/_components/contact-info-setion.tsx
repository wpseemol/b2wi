import { GoMail } from 'react-icons/go';
import { PiPhoneCallLight } from 'react-icons/pi';
import { TfiLocationPin } from 'react-icons/tfi';

export default function ContactInfoSection() {
    return (
        <div className="bg-primary p-5  pr-0 h-full mx-2 sm:mx-0">
            <div className="text-white space-y-2">
                <h2 className="text-[28px] font-bold">Contact Info</h2>
                {/* location  */}

                <div className="flex gap-3 items-center">
                    <span className="sm:w-14 sm:h-14 w-10 h-10 sm:text-2xl bg-neutral-50 rounded-full text-black flex justify-center items-center ">
                        <TfiLocationPin className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className="font-medium">Location</h3>
                        <p className="font-normal">Banani, Dhaka, Bangladesh</p>
                    </div>
                </div>
                {/* location  */}
                {/* email */}
                <div className="flex gap-3 items-center">
                    <span className="sm:w-14 sm:h-14 w-10 h-10 sm:text-2xl bg-neutral-50 rounded-full text-black flex justify-center items-center ">
                        <GoMail className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className=" font-medium">Email</h3>
                        <p className="font-normal">⁠b2winitiative@gmail.com</p>
                    </div>
                </div>
                {/* email */}

                <div className="flex gap-3 items-center">
                    <span className="sm:w-14 sm:h-14 w-10 h-10 sm:text-2xl bg-neutral-50 rounded-full text-black flex justify-center items-center ">
                        <PiPhoneCallLight className="group-hover:scale-105 duration-100" />
                    </span>
                    <div className="text-nowrap">
                        <h3 className=" font-medium">Phone No</h3>
                        <p className="font-normal">+8801685456708</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
