import {MultipleStars} from "@/src/components/ui/multiple-stars";

export const AmiensFoodSection = () => {
    return (
        <div className={'bg-[#FFFAF6] px-4 pt-10 pb-16 rounded-tl-[100px] rounded-ee-[100px] md:rounded-ee-[150px] md:px-20 md:pb-10'}>
            <h2 className={'ml-12 md:ml-0 text-2xl md:text-3xl xl:text-5xl'}>Le format vidéo <span
                className={'text-primary font-bold'}>amiensfood</span>, <br/> un vrai <span
                className={'text-primary font-bold'}>bon coup</span> !</h2>

            <div className={'grid grid-cols-2 items-center mt-6 max-w-[1400px] mx-auto'}>
                <video width="200"
                       autoPlay
                       loop
                       playsInline
                       muted
                       className={'mx-auto w-[120px] md:w-[200px] xl:w-[250px]'}
                >
                    <source src={'/video/mockupmamatte.mp4'} type="video/mp4"/>
                </video>

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>


        </div>
    )
}
