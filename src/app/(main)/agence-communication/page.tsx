import {MultipleStars} from "@/src/components/ui/multiple-stars";

import {ServicesCarousel} from "@/src/components/agence-com/services-carousel";
import {ExampleCustomerCard} from "@/src/components/agence-com/example-customer-card";
import {ComCustomerExample} from "@/src/utils/types";

import MockupMamatte from '../../../../public/img/mockup-mamatte-v1.png'
import MockupWiotte from '../../../../public/img/mockup-mamatte-v1.png'
import LogoMamatte from '../../../../public/img/mamatte-logo.webp'
import LogoWiotte from '../../../../public/img/wiotte-logo.webp'
import {AgenceComContact} from "@/src/components/agence-com/contact";
import {ReviewCustomer} from "@/src/components/agence-com/review-customer";


const MamatteExample: ComCustomerExample = {
    from: "11.000",
    to: "21.000",
    name: "Mamatte boulangerie",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: LogoMamatte as any,
    mockup: '/video/mockupmamatte.mp4'
}

const BoucherieWiotte: ComCustomerExample = {
    from: "3200",
    to: "6400",
    name: "Boucherie wiotte",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: LogoWiotte as any,
    mockup: '/video/mockupmamatte.mp4',
    reversed: true
}

const AgenceCommunicationPage = () => {
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
            <section className={'w-full bg-[#F8EBE0] rounded-t-[80px] sm:rounded-t-[120px] mt-12'}>

                <div className={'space-y-32 sm:space-y-20 mx-2 sm:mx-20 pt-12'}>
                    <div data-aos="fade-right">
                        <ExampleCustomerCard data={MamatteExample}/>

                        <div className={'mt-64 lg:mt-20'}>
                            <ReviewCustomer
                                review={{
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    logo: LogoMamatte as any
                                }}
                            />
                        </div>

                    </div>
                    <div data-aos="fade-left">
                        <ExampleCustomerCard data={BoucherieWiotte}/>

                        <div className={'mt-64 lg:mt-20'}>
                            <ReviewCustomer
                                review={{
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    logo: LogoWiotte as any
                                }}
                            />
                        </div>
                    </div>
                </div>


                <div data-aos="fade-up" className={'mt-20'}>
                    <h3 className={'text-center text-3xl max-w-max mx-auto font-bold uppercase py-8 relative'}>
                        Community manager
                        <span className={'absolute -right-7 top-6'}>
                            <MultipleStars width={25}/>
                        </span>
                    </h3>


                    <div className={'pb-12'}>
                        <ServicesCarousel/>
                    </div>
                </div>

                <AgenceComContact/>
            </section>


        </section>
    )
}

export default AgenceCommunicationPage
