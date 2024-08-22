'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MoveLeft, MoveRight} from "lucide-react";


const faq = [
    {
        question: 'Question 1',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Question 2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Question 3',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'Question 4',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
]

export const FAQ = () => {
    return (
        <div className={'relative'}>
            <Swiper
                slidesPerView={4.5}
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                    disabledClass: 'swiper-button-disabled'
                }}
                className={'swiper-container'}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                    },
                    1000: {
                        slidesPerView: 2.1,
                        grid: {
                            rows: 1,
                            fill: 'row'
                        }
                    }
                }}
            >
                {faq.map((faq, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <div className={'bg-primary rounded-3xl text-center uppercase p-2 text-white font-bold w-5/6 mx-auto z-30 relative'}>{faq.question}</div>
                            <div className={'bg-[#FFFAF6] -mt-3 pt-8 px-12 pb-4 rounded-[30px] text-justify'}>{faq.answer}</div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
            <div
                className="custom-prev -bottom-14 hidden translate-x-[50%] md:flex right-[51%] md:top-[40%] md:translate-y-[50%] md:left-[40px] xl:left-[120px]">
                <MoveLeft size={20}/></div>
            <div
                className="custom-next -bottom-14 hidden translate-x-[50%] md:flex left-[51%] md:left-auto  md:top-[40%] md:translate-y-[50%] md:right-[40px] xl:right-[120px]">
                <MoveRight size={20}/></div>
        </div>
    )
}
