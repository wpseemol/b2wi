'use client';

import { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export default function AlertMessage() {
    const [alert, setAlert] = useState(false);

    return (
        <>
            <div
                style={{
                    height: alert ? 'auto' : 0,
                    paddingBlock: alert ? 16 : 0,
                }}
                className="relative flex items-end gap-2 px-4 mb-8 rounded-lg bg-red-300 text-red-500 text-sm font-semibold bg-opacity-10 transition-all overflow-hidden"
                role="alert"
            >
                <FiAlertTriangle className="!stroke-yellow-600 w-5 h-5" />
                Email and password is incorrect.
            </div>
            <button
                className="hidden"
                onClick={() => {
                    setAlert(false);
                }}
            ></button>
        </>
    );
}
