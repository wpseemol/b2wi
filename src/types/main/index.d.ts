import React from 'react';

export type MyLinkType = {
    href: string;
    className?: string;
    children: React.ReactNode;
    activeClassName?: string;
};

export type BrandImages = {
    id: number;
    slug: string;
    imgUrl: string;
    name: string;
};

export type NewsDataType = {
    id: string | number;
    imgUrl: string;
    title: string;
    publishedBy: string;
    publishedAt: string;
    description: string;
};
