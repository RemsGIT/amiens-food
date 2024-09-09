import {Quote, Star} from "lucide-react";
import Image from "next/image";

export interface CustomerReview {
    name?: string,
    text: string,
    author?: string,
    author_position?: string,
    logo?: string,
    hasMockup: boolean
}

export const ReviewCustomer = ({review}:{review: CustomerReview}) => {
    return (
        <>
            <div className={'hidden flex-col w-[80%] sm:w-auto lg:w-3/4 mx-auto max-w-[800px] md:flex'}>

                <div className={`flex items-center gap-2 ${review.hasMockup ? '-ml-8 lg:-ml-[105px]' : ''}`}>
                    <Image
                        src={review.logo as any}
                        alt={`Partenaire amiens food`}
                        className={'w-[60px] h-[60px] bg-black rounded-full p-1 object-contain'}
                    />
                    <div className={'flex'}>
                        {Array.from({length: 5}, (index: number) => (
                            <Star key={index} fill="#F78E3D" strokeWidth={0}/>
                        ))}
                    </div>
                </div>


                <div className={'italic text-justify mt-3'}>
                    <span className={'not-italic font-bold'}>Le petit mot : </span>
                    <p className={'relative mt-1'}>
                        <Quote size={25} className={'absolute -left-8  scale-x-[-1]'}/>
                        {review.text}
                        <Quote size={25} className={'inline ml-2 align-text-top'}/>
                    </p>
                </div>
            </div>
            <div className={`flex flex-col ${review.hasMockup ? '-ml-4' : 'ml-12'} mr-6 md:hidden`}>

                <div className={'flex items-center gap-2 -ml-8 lg:-ml-[105px]'}>
                    <Image
                        src={review.logo as any}
                        alt={`Partenaire amiens food`}
                        className={'w-[40px] h-[40px] bg-black rounded-full p-1 object-contain'}
                    />
                    <div className={'flex'}>
                        {Array.from({length: 5}, (index: number) => (
                            <Star key={index} fill="#FFD700" size={18} strokeWidth={0}/>

                        ))}
                    </div>
                </div>


                <div className={'italic text-justify mt-1'}>
                    <span className={'not-italic font-semibold text-xs'}>Le petit mot : </span>
                    <p className={'relative text-xs mt-1'}>
                        <Quote size={18} className={'absolute -left-6  scale-x-[-1]'}/>
                        {review.text}
                        <Quote size={18} className={'inline ml-2 align-text-top'}/>
                    </p>
                </div>

            </div>
        </>

    )
}
