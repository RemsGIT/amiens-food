import {MultipleStars} from "@/src/components/ui/multiple-stars";
import MockupEmpty from "@/public/img/mockup-front-empty.png";
import Image from "next/image";

import Logo from '@/public/img/logo/logo-no-text.png'
import PicturePicto from '@/public/img/appareil-photo.png'
import {TextCustom} from "@/src/utils/types";

export const AmiensFoodSection = async () => {

    const texts: TextCustom[] = await fetch(`${process.env.APP_URL}/api/texts`, {cache: 'no-store'}).then(res => res.json())


    return (
        <div className={'bg-[#FFFAF6] px-4 pt-10 pb-16 rounded-tl-[100px] rounded-ee-[100px] md:rounded-ee-[150px] md:px-20 md:pb-10'}>
            <h2 className={'ml-6 md:ml-0 text-3xl xl:text-5xl'}>Le format vidéo <span
                className={'text-primary font-bold'}>Amiensfood</span>, <br/> un vrai <span
                className={'text-primary font-bold'}>bon coup</span> !</h2>

            <div className={'grid grid-cols-2 items-center mt-6 max-w-[1400px] mx-auto'}>
                <div className={'relative mx-auto w-[120px] md:w-[200px] xl:w-[250px]'}>
                    <Image
                        src={Logo}
                        alt={'bg-[#FFFAF6] w-full'}
                    />

                    <Image
                        src={PicturePicto}
                        alt={''}
                        className={'absolute w-[70px] lg:[100px] -top-[70px]'}
                    />


                </div>


                <ul className={'com-amiensfood-stats gap-y-4 -ml-4 font-bold grid  max-w-[800px] xl:gap-y-10 xl:grid-cols-1 md:ml-0'}>
                    <li>45.000 vues de moyenne</li>
                    <li>Communauté 100% amiénoise</li>
                    <li>13.500 amiénois au taquet !</li>
                    <li>Des retours clients satisfaits</li>
                </ul>

                <div className={'bg-[#F8EBE0] p-4  leading-8 rounded-[30px] mt-12 w-full col-span-2 mx-auto relative md:p-6 '}>
                    <div className={'absolute -left-4 -top-6 md:-left-5 md:-top-5'}>
                        <MultipleStars width={50}/>
                    </div>

                    <p>
                        {texts.find(text => text.code === "COM_AMIENSFOOD")?.text ?? ''}
                    </p>
                </div>

            </div>


        </div>
    )
}
