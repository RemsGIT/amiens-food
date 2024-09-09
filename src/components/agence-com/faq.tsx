'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {MoveLeft, MoveRight} from "lucide-react";
import {useEffect, useRef} from "react";

import CollaboratePicto from '@/public/img/collaborer.png'
import PicturePicto from '@/public/img/appareil-photo.png'
import ChatPicto from '@/public/img/bulle.png'
import QuestionPicture from '@/public/img/question.png'
import Image from "next/image";


const faq = [
    {
        question: 'Comment on bosse ensemble ?',
        answer: 'On fixe une date ensemble pour les shootings ! Ensuite notre team  crée le contenu, on te  montre tout puis on te propose un planning éditorial à ta disposition 24h/24h ! Ensuite tous les mois on fait un compte rendu ensemble des statistiques !',
        icon: CollaboratePicto
    },
    {
        question: 'Marre de répondre aux clients ?',
        answer: 'On s’occupe de tout ! Concentre toi sur ton métier, on prend le relais pour chouchouter tes clients en ligne et répondre à toutes leurs questions !',
        icon: ChatPicto
    },
    {
        question: 'Tu ne sais pas prendre de photos ?',
        answer: 'Ça tombe bien c’est notre métier ! C’est le moment de rendre sexy tes produits !',
        icon: PicturePicto
    },
    {
        question: 'Tu ne sais pas comment ça marche la sponsorisation ?',
        answer: 'On t’explique tout de A à Z, on la gère en te faisant un retour régulier et tu verras enfin de nouvelles têtes à ta boutique !',
        icon: QuestionPicture
    },
]

export const FAQ = () => {

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
                        slidesPerView: 2.1,
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
                {faq.map((faq, index) => (
                    <SwiperSlide key={index}>
                        <div className={'relative'}>
                            <div className={'bg-primary rounded-3xl text-center uppercase p-2 text-white font-bold w-5/6 mx-auto z-30 relative'}>{faq.question}</div>
                            <Image src={faq.icon} alt={`Amiens food - ${faq.question}`} className={'w-8 -rotate-12 absolute left-4 z-50 opacity-65'} />
                            <div className={'bg-[#F8EBE0] -mt-3 pt-12 px-12 pb-4 rounded-[30px] text-justify min-h-[28c0px] md:min-h-[180px]'}>{faq.answer}</div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
            <div
                ref={prevRef}
                className="custom-prev flex -bottom-14 translate-x-[50%] right-[56%] md:top-[40%] md:translate-y-[50%] md:left-[40px] xl:left-[120px]">
                <MoveLeft size={20}/>
            </div>
            <div
                ref={nextRef}
                className="custom-next flex -bottom-14 translate-x-[50%] left-[47%] md:left-auto  md:top-[40%] md:translate-y-[50%] md:right-[40px] xl:right-[120px]">
                <MoveRight size={20}/>
            </div>
        </div>
    )
}
