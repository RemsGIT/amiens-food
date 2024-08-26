import {MultipleStars} from "@/src/components/ui/multiple-stars";
import {ComCustomerExample} from "@/src/utils/types";
import Image from "next/image";
import {ReviewCustomer} from "@/src/components/agence-com/review-customer";

import MockupEmpty from '@/public/img/mockup-front-empty.png'

import InstagramLogo from '@/public/img/icons/instagram.svg'
import TiktokLogo from '@/public/img/icons/tiktok.svg'

export const ExampleCustomerCard = ({data}: { data: ComCustomerExample }) => {
    return (
        <>
            {/* DESKTOP */}
            <div className={'max-w-[1000px] mx-auto hidden md:block'}>
                <h4 className={'uppercase text-3xl lg:text-2xl text-center font-bold'}>
                    De {data.from} à {data.to} 🚀
                    <br/>
                    <span className={'relative text-primary text-2xl lg:text-xl'}>
                    abonnés
                    <Image
                        src={data.social_media === 'instagram' ? InstagramLogo : TiktokLogo}
                        alt={`${data.name} | Amiens food | ${data.social_media}`}
                        className={'w-[25px] inline align-text-bottom ml-1.5'}
                    />
                <span className={'absolute -right-6 -top-1.5'}>
                    <MultipleStars width={20}/>
                </span>
            </span>
                </h4>

                <div
                    className={`w-full bg-[#F78E3D] h-[300px] rounded-[50px] mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2`}>

                    <div
                        className={`relative w-[150px] lg:w-[200px] mx-auto mt-2 lg:-mt-12 ${data.reversed ? 'order-1 lg:mr-20' : 'order-last lg:order-first lg:ml-20'}`}>
                        <Image
                            src={MockupEmpty}
                            alt={''}
                        />
                        {data.type === 'video' ? (
                            <video
                                width={800}
                                height={800}
                                className="absolute top-8 left-[10px] w-[120px] lg:w-[180px] lg:h-[350px] object-cover"
                                autoPlay
                                loop
                                playsInline
                                muted
                            >
                                <source src={data.mockup} type={'video/mp4'}/>
                            </video>
                        ) : (
                            <img
                                className="absolute top-8 left-[10px] w-[130px] lg:w-[180px] lg:h-[350px] object-cover rounded-3xl"
                                src={data.mockup}
                                alt={`Amiens food - ${data.name}`}
                            />
                        )}

                    </div>


                    <div className={`${data.reversed ? 'lg:ml-20' : 'lg:-ml-20'} space-y-5`}>
                        <h5 className={`text-white text-3xl lg:text-4xl text-center lg:text-left font-bold mt-8`}>{data.name}</h5>
                        <p className={`text-white text-xs lg:text-sm text-justify ${data.reversed ? 'w-[90%] mx-auto lg:w-full lg:mx-0' : 'w-[90%] mx-auto lg:mx-0 lg:w-[80%]'}`}>{data.description}</p>
                    </div>

                </div>

            </div>

            {/* MOBILE */}
            <div className={'max-w-[1000px] mx-auto block md:hidden'}>
                <div
                    className={`w-full bg-[#F78E3D] pb-12 rounded-[50px] mt-6 lg:mt-8`}>
                    <h5 className={`text-white text-3xl lg:text-4xl text-center lg:text-left font-bold pt-4`}>{data.name}</h5>

                    <div className={'grid grid-cols-2 items-center mt-3 gap-4'}>
                        <div className={'relative w-[120px] lg:w-[200px] ml-4'}>
                            <Image
                                src={MockupEmpty}
                                alt={''}
                            />
                            {data.type === 'video' ? (
                                <video
                                    width={800}
                                    height={800}
                                    className={`ml-6 top-4 -left-[18px] w-[108px] h-[210px]  lg:w-[180px] absolute object-cover`}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                >
                                    <source src={data.mockup} type={'video/mp4'}/>
                                </video>
                            ) : (
                                <img
                                    className={`ml-6 top-4 -left-[18px] w-[108px] h-[210px]  lg:w-[180px] absolute object-cover rounded-md`}
                                    src={data.mockup}
                                    alt={`Amiens food - ${data.name}`}
                                />
                            )}

                        </div>


                        <ReviewCustomer
                            review={{
                                text: data.reviewText,
                                logo: data.logo
                            }}
                        />

                    </div>

                    <h4 className={'uppercase text-3xl lg:text-2xl text-center font-bold mt-16'}>
                        De {data.from} à {data.to} 🚀
                        <br/>
                        <span className={'relative text-white text-2xl lg:text-xl'}>
                        abonnés
                        <Image
                            src={data.social_media === 'instagram' ? InstagramLogo : TiktokLogo}
                            alt={`${data.name} | Amiens food | ${data.social_media}`}
                            className={'w-[30px] inline align-text-bottom ml-2'}
                        />
                        <span className={'absolute -right-6 -top-1.5'}>
                            <MultipleStars width={20}/>
                        </span>
                    </span>
                    </h4>

                    <p className={`text-white text-xs lg:text-sm text-justify mt-6 mx-8`}>{data.description}</p>


                </div>

            </div>
        </>


    )
}
