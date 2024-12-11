'use client';

import React, { useState } from 'react';

const SubjectDropdown: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <select
                id="dropdown"
                value={selectedValue}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border focus-visible:outline-none p-3">
                <option value="" disabled>
                    Please Choose Your Topic of Query:
                </option>
                {selectOptions.map((option) => (
                    <option key={option.id} value={option.slug}>
                        {option.title}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SubjectDropdown;

const selectOptions: SelectOption[] = [
    {
        id: 1,
        title: 'University Research Assistance',
        slug: 'university-research-assistance',
    },
    {
        id: 2,
        title: 'Profile Assessment',
        slug: 'profile-assessment',
    },
    {
        id: 3,
        title: 'SOP Review',
        slug: 'sop-review',
    },
    {
        id: 4,
        title: 'LOR Review',
        slug: 'lor-review',
    },
    {
        id: 5,
        title: 'Visa Application Review',
        slug: 'visa-application-review',
    },
    {
        id: 6,
        title: 'Accommodation Assistance',
        slug: 'accommodation-assistance',
    },
];

type SelectOption = {
    id: number;
    title: string;
    slug: string;
};
