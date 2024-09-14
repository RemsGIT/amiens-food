import {MultipleStars} from "@/src/components/ui/multiple-stars";

import {ServicesCarousel} from "@/src/components/agence-com/services-carousel";
import {ExampleCustomerCard} from "@/src/components/agence-com/example-customer-card";
import {ComCustomerExample, TextCustom} from "@/src/utils/types";

import LogoMamatte from '../../../../public/img/mamatte-logo.webp'
import LogoWiotte from '../../../../public/img/wiotte-logo.jpg'
import {AgenceComContact} from "@/src/components/agence-com/contact";
import {ReviewCustomer} from "@/src/components/agence-com/review-customer";
import {AmiensFoodSection} from "@/src/components/agence-com/amiensfood";
import {FAQ} from "@/src/components/agence-com/faq";




const AgenceCommunicationPage = async () => {


    const texts: TextCustom[] = await fetch(`${process.env.APP_URL}/api/texts`, {cache: 'no-store'}).then(res => res.json())
    const MamatteExample: ComCustomerExample = {
        from: "11.000",
        to: "25.000",
        name: "Mamatte boulangerie",
        description: texts.find(text => text.code === "COM_MAMATTE_EXAMPLE")?.text ?? '',
        logo: LogoMamatte as any,
        mockup: '/video/video_mamatte.mov',
        reviewText: texts.find(text => text.code === "COM_MAMATTE_REVIEW")?.text ?? '',
        type: 'video',
        social_media: 'instagram',
        images: ['/img/mamatte/image00001-min.jpeg', '/img/mamatte/image00002-min.jpeg', '/img/mamatte/image00003-min.jpeg', '/img/mamatte/image00004-min.jpeg', '/img/mamatte/image00005-min.jpeg', '/img/mamatte/image00006-min.jpeg', '/img/mamatte/image00007-min.jpeg', '/img/mamatte/image00008-min.jpeg', '/img/mamatte/image00009-min.jpeg', '/img/mamatte/image00010-min.jpeg'],
        period: 'en un an'
    }

    const BoucherieWiotte: ComCustomerExample = {
        from: "5000",
        to: "11.500",
        name: "Boucherie wiotte",
        description: texts.find(text => text.code === "COM_WIOTTE_EXAMPLE")?.text ?? '',
        logo: LogoWiotte as any,
        mockup: '',
        reversed: true,
        reviewText: texts.find(text => text.code === "COM_WIOTTE_REVIEW")?.text ?? '',
        type: 'image',
        social_media: 'tiktok',
        images: ['/img/wiotte/image00001-min.jpeg', '/img/wiotte/image00002-min.jpeg', '/img/wiotte/image00003-min.jpeg', '/img/wiotte/image00004-min.jpeg', '/img/wiotte/image00005-min.jpeg', '/img/wiotte/image00006-min.jpeg', '/img/wiotte/image00007-min.jpeg', '/img/wiotte/image00008-min.jpeg', '/img/wiotte/image00009-min.jpeg', '/img/wiotte/image00010-min.jpeg'],
        period: 'depuis février'
    }

    return (
        <section className={'mt-28'}>

            <h1 className={'text-center text-3xl md:text-4xl font-bold uppercase'} data-aos="fade-up">
                {"L'agence"} de communication qui
                <span className={'text-primary mx-auto block relative max-w-max'}>
                    booste ton chiffre {"d'affaire"}

                    <span className={'absolute right-24 xs:-right-6 xs:-top-1'}>
                        <MultipleStars width={25}/>
                    </span>
                </span>
            </h1>

            {/* FIRST SECTION : PRESENTATION
            <section className={'flex justify-center mt-14 w-[90%] sm:w-3/4 max-w-[800px] mx-auto'} data-aos="fade-up">
                <PresentationBloc/>
            </section>
            */}


            {/* SECOND SECTION : SERVICES */}
            <section className={'w-full md:bg-[#F8EBE0] md:rounded-t-[80px] sm:rounded-t-[120px] mt-16 md:mt-12'}>

                <div className={'space-y-32 sm:space-y-20 mx-2 sm:mx-20 md:pt-12'}>
                    <div data-aos="fade-right">
                        <ExampleCustomerCard data={MamatteExample}/>

                        <div className={'mt-64 lg:mt-20 hidden md:block'}>
                            <ReviewCustomer
                                review={{
                                    text: MamatteExample.reviewText,
                                    logo: LogoMamatte as any,
                                    hasMockup: MamatteExample.mockup
                                }}
                            />
                        </div>

                    </div>
                    <div data-aos="fade-left">
                        <ExampleCustomerCard data={BoucherieWiotte}/>

                        <div className={'mt-64 lg:mt-20 hidden md:block'}>
                            <ReviewCustomer
                                review={{
                                    text: BoucherieWiotte.reviewText,
                                    logo: LogoWiotte as any,
                                    hasMockup: BoucherieWiotte.mockup
                                }}
                            />
                        </div>
                    </div>
                </div>


                <div className={'bg-[#F8EBE0] rounded-t-[80px] md:bg-none md:rounded-none'}>
                    <div data-aos="fade-up" className={'mt-20 '}>
                        <h3 className={'text-center text-3xl max-w-max mx-auto font-bold uppercase py-8 relative'}>
                            {"Comment est ce qu'on booste ton chiffre d'affaire ?"}
                            <span className={'absolute -right-7 top-6'}>
                                <MultipleStars width={25}/>
                            </span>
                        </h3>


                        <div className={'pb-12'}>
                            <ServicesCarousel/>
                        </div>
                    </div>


                    <div>
                        <AmiensFoodSection/>
                    </div>

                    <div className={'mt-20 bg-[#FFFAF7]  pt-8 pb-20 rounded-tl-[100px]'}>
                        <h3 className={'text-center text-3xl max-w-max mx-auto font-bold uppercase py-8 relative'}>
                            Mini FAQ pour mieux se connaître !
                            <span className={'absolute right-16 bottom-7 md:-right-10 md:top-5'}>
                                <MultipleStars width={40}/>
                            </span>
                        </h3>
                        <FAQ/>
                    </div>

                    <AgenceComContact/>
                </div>

            </section>


        </section>
    )
}

export default AgenceCommunicationPage
