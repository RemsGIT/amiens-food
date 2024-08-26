'use client'

import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {MoveLeft, MoveRight} from "lucide-react";
import {useEffect, useRef} from "react";

export const ExampleCustomerImagesCarousel = ({images}:{images: string[]}) => {

    const id = (Math.random() * (1000 - 0) + 1000).toFixed(0).toString();

    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            // Configure les éléments de navigation une fois que les références sont disponibles
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            // Initialiser et mettre à jour les boutons de navigation
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []); // Ce useEffect se déclenche une seule fois après le premier rendu


    return (
        <div className={'relative'}>
            <Swiper
                slidesPerView={4.5}
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                    prevEl: prevRef.current,
                    //@ts-ignore
                    nextEl: nextRef.current,
                    disabledClass: 'swiper-button-disabled'
                }}
                className={'swiper-container'}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 20
                    },
                    1000: {
                        slidesPerView: 1.1,
                        grid: {
                            rows: 1,
                            fill: 'row'
                        }
                    }
                }}
                onSwiper={(swiper) => {
                    // Assigner l'instance Swiper à la référence
                    swiperRef.current = swiper;
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={''} className={'rounded-xl'}/>
                    </SwiperSlide>
                ))}


            </Swiper>
            <div
                ref={prevRef}
                className="custom-prev-light flex -bottom-14 translate-x-[50%] right-[56%] -bottom-11 md:top-[35%] md:translate-y-[50%] md:left-[40px] xl:-left-[30px]">
                <MoveLeft size={20}/>
            </div>
            <div
                ref={nextRef}
                className="custom-next-light flex -bottom-14 translate-x-[50%] left-[47%] md:left-auto -bottom-11  md:top-[35%] md:translate-y-[50%] md:right-[40px] xl:right-[0px]">
                <MoveRight size={20}/>
            </div>

        </div>
    )
}
