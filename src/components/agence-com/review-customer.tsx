import {Quote, Star} from "lucide-react";
import Image from "next/image";

export interface CustomerReview {
    name?: string,
    text: string,
    author?: string,
    author_position?: string,
    logo?: string
}

export const ReviewCustomer = ({review}:{review: CustomerReview}) => {
    return (
        <div className={'flex flex-col w-[80%] sm:w-auto lg:w-3/4 mx-auto max-w-[800px]'}>

            <div className={'flex items-center gap-2 -ml-8 lg:-ml-[105px]'}>
                <Image
                    src={review.logo as any}
                    alt={`Partenaire amiens food`}
                    className={'w-[60px] h-[60px] bg-black rounded-full p-1 object-contain'}
                />
                <div className={'flex'}>
                    {Array.from({length: 5}, (index: number) => (
                        <Star key={index} fill="primary" strokeWidth={0}/>
                    ))}
                </div>
            </div>


            <div className={'italic text-justify mt-3'}>
                <p className={'relative'}>
                    <Quote size={25} className={'absolute -left-8  scale-x-[-1]'}/>
                    {review.text}
                    <Quote size={25} className={'inline ml-2 align-text-top'} />
                </p>
            </div>

        </div>
    )
}