export const b2wiNewsData: B2wiNewsDataType[] = [
    {
        id: 1,
        slug: 'https://bangladeshmoments.com/education/128847/',
        title: 'বিদেশে উচ্চশিক্ষায় বাংলাদেশী শিক্ষার্থীদের পাশে ‘বিটুডাব্লিউআই’',
        imgUrl: 'b2w-11330.jpg',
        publishedOn: '১৩ জুলাই ২০২৪, ০৭:২৮ PM',
        publishedIn: 'Bangladesh Moments',
    },
    {
        id: 2,
        slug: 'https://thedailycampus.com/scholarship/147337',
        title: 'বিদেশে উচ্চশিক্ষায় আগ্রহী বাংলাদেশি শিক্ষার্থীদের পাশে ‘বিটুডাব্লিউআই’',
        imgUrl: '147337_14.jpg',
        publishedOn: '১৩ জুলাই ২০২৪, ০৯:৩০ PM',
        publishedIn: 'Bangladesh Moments',
    },
    {
        id: 3,
        slug: 'https://thedailycampus.com/scholarship/148655/',
        title: 'বিদেশে উচ্চশিক্ষায় আগ্রহী বাংলাদেশি শিক্ষার্থীদের আবেদন সময়সীমা বাড়ল',
        imgUrl: '148655_183.jpg',
        publishedOn: '০১ আগস্ট ২০২৪, ১০:০১ PM',
        publishedIn: 'Bangladesh Moments',
    },
    {
        id: 4,
        slug: 'https://thedailycampus.com/fellowpship%20/150543/%E0%A6%AC%E0%A6%BF%E0%A6%9F%E0%A7%81%E0%A6%A1%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%89-%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%B6%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%AD%E0%A7%87%E0%A6%B0-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%97%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%AF%E0%A6%BC%E0%A6%95-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%AC%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0',
        title: 'বিটুডব্লিউ ইনিশিয়েটিভের উদ্যোগে বিদেশে উচ্চশিক্ষা বিষয়ক প্রথম ওয়েবিনার',
        imgUrl: '150543_142.jpg',
        publishedOn: '১৯ আগস্ট ২০২৪, ১০:৩০ PM',
        publishedIn: 'The Daily Campus',
    },
];

export interface B2wiNewsDataType {
    id: string | number;
    slug: string;
    title: string;
    imgUrl: string;
    publishedOn: string;
    publishedIn: string;
}
