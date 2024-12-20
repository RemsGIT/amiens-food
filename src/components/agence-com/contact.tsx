'use client'

import ContactImage from '../../../public/img/com-contact.svg'
import Image from "next/image";
import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/src/components/ui/form";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Button} from "@/src/components/ui/button";
import {FAQ} from "@/src/components/agence-com/faq";

const formSchema = z.object({
    firstname: z.string({required_error: ""}).min(1),
    lastname: z.string({required_error: ""}).min(1),
    email: z.string({required_error: ""}).email({message: "Entrez une adresse mail correct"}).min(1),
    phone: z.string().optional(),
    message: z.string({required_error: ""}).min(1)
})

export const AgenceComContact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = (data: any) => {
        setIsSubmitting(true)
        fetch("/api/contact?from=com", {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    toast.success('Votre message a bien été envoyé')
                    form.reset()

                } else {
                    toast.error('Veuillez reéssayer plus tard')
                }
                setIsSubmitting(false)
            })
    }

    return (
        <div id={'contact'} className={'bg-[#FFFAF7] rounded-t-[120px] mt-44 lg:mt-24 pb-16'}>

            <div className={' flex flex-col lg:flex-row'}>
                <div className={'mx-2  lg:ml-14 mt-14 mb-6 lg:my-14'}>
                    <h6 className={'uppercase text-2xl lg:text-3xl font-bold text-center lg:text-left'}>
                        Prêt à révolutionner <br/> votre <span className={'text-primary'}>communication</span> ?
                    </h6>
                    <p className={'text-2xl lg:text-3xl font-bold uppercase mt-5 text-center lg:text-left'}>contactez-nous</p>
                    <Image
                        src={ContactImage}
                        alt={'Contactez-nous | Amiens food agence de communication'}
                        className={'w-[400px] mt-12 hidden lg:block'}
                    />
                </div>

                <div className={'lg:bg-[#F8EBE0] mx-auto lg:my-12 rounded-[50px] w-full max-w-[650px]'}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-6 mx-6 lg:mx-12 my-6"}>
                            <div className={'flex gap-4'}>
                                <FormField
                                    control={form.control}
                                    name="firstname"
                                    render={({field}) => (
                                        <FormItem className={'w-1/2'}>
                                            <FormLabel>Prénom <span className={'text-red-500'}>*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Entrez votre prénom" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastname"
                                    render={({field}) => (
                                        <FormItem className={'w-1/2'}>
                                            <FormLabel>Nom <span className={'text-red-500'}>*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Entrez votre nom" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Votre adresse mail <span
                                            className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrez votre adresse mail" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Votre numéro de téléphone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Entrez votre numéro de téléphone" type="tel"
                                                   pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message <span className={'text-red-500'}>*</span></FormLabel>
                                        <FormControl>
                                            <Textarea {...field} rows={8} className={"resize-none"}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button isLoading={isSubmitting} className={"rounded-xl flex"}>
                                {isSubmitting ? 'Envoie en cours' : 'Envoyer'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>

    )
}
