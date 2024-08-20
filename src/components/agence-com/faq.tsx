import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../ui/accordion"
import {MultipleStars} from "@/src/components/ui/multiple-stars";

export const FAQ = () => {
    return (
        <>
            <h3 className={'text-center text-3xl max-w-max mx-auto font-bold uppercase py-8 relative'}>
                Foire aux questions
                <span className={'absolute -right-7 top-6'}>
                    <MultipleStars width={25}/>
                </span>
            </h3>

            <Accordion type={"multiple"} className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Question 1</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Question 2</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Question 3</AccordionTrigger>
                    <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
