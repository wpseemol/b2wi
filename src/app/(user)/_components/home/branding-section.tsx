import PointerIcon from '@/components/svg/pointer-icon';
import WorldIcon from '@/components/svg/world-icon';
import { BrandImages } from '@/types/main';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandingSection() {
    return (
        <section className="flex justify-center md:flex-row flex-col mb-8">
            <div className=" min-h-[95px] bg-primaryColor  md:w-1/2 flex items-center md:justify-end justify-center md:pr-5 relative ">
                <div className="flex md:justify-end gap-3 justify-center w-full  md:pl-8 pl-2">
                    <span className="w-5 h-5 mt-1 ">
                        <PointerIcon />
                    </span>
                    <p className="md:text-[18px] md:font-semibold font-medium text-white relative z-10">
                        In collaboration with top-tiered consultants in study
                        abroad industry.
                    </p>
                    <span className=" absolute bottom-2 right-8 ">
                        <WorldIcon />
                        <span className="absolute top-0 left-0  w-full h-full bg-primaryColor/55"></span>
                    </span>
                </div>
            </div>
            <div className=" min-h-[80px] md:w-1/2 bg-[#b1aaaa27] dark:bg-[#9e9ea1] flex items-center md:flex-row flex-col justify-center md:justify-normal">
                <div className="flex items-center md:justify-evenly justify-center gap-10 w-full">
                    {brandImages.map((bImage) => (
                        <figure
                            key={bImage.id}
                            className="max-w-full h-[48px] group"
                        >
                            <Link href={bImage.slug}>
                                <Image
                                    src={`/images/${bImage.imgUrl}`}
                                    alt={bImage.name}
                                    width={224}
                                    height={80}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition "
                                />
                            </Link>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

const brandImages: BrandImages[] = [
    {
        id: 1,
        slug: 'https://bepro.com.bd/',
        imgUrl: 'brand-1.png',
        name: 'be pro',
    },
    {
        id: 2,
        slug: 'https://globaleduexp.com/',
        imgUrl: 'brand-2.png',
        name: 'global education expert',
    },
    { id: 3, slug: 'https://fly8.info/', imgUrl: 'brand-3.png', name: 'edu' },
];
