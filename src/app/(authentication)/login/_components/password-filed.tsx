'use client';

import { useState } from 'react';
import { PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi';

export default function PasswordFiled() {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="flex items-center relative w-full">
            <input
                type={showPass ? 'text' : 'password'}
                name="password"
                autoComplete="current-password"
                className="w-full !ring-0 !shadow-none !bg-transparent border-0 outline-0 border-b border-blue-950 py-3 focus:border-primary  transition-all pl-3"
                placeholder="Password"
            />
            {showPass ? (
                <PiEyeDuotone
                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() => {
                        setShowPass((prev) => !prev);
                    }}
                />
            ) : (
                <PiEyeClosedDuotone
                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() => {
                        setShowPass((prev) => !prev);
                    }}
                />
            )}
        </div>
    );
}
