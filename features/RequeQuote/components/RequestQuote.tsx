"use client"

import Image from "next/image";
import { useState } from "react";
import { Form } from "@/components/ui/Form";
import { useTranslations } from "next-intl";
import { HowItWorks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { WhatsApp } from "@/components/ui/WhatsApp";
import { Container } from "@/components/ui/Container";
import { FormSuccess } from "@/components/ui/FormSuccess";


const options = [
    {name: "Buy machinery"},
    {name: "Repair"},
    {name: "Agricultural products"},
    {name: "Other"},
    {name: "Rental"},
    {name: "Land preparation"},
    {name: "Financing"}
] as const;

export function RequestQuote () {
    const t = useTranslations("ContactSection");
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
        
    const handleSubmited = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmiting(true)
        
        await new Promise((resolve) => setTimeout(resolve, 300));
        setIsSubmiting(false);
        setIsSubmited(true)
    };

    return (
        <Section className="bg-cmyk/85 max-md:px-3">
            <Container className="max-md:pb-10 flex flex-col gap-10 md:gap-5">
                
                <div className="flex flex-col justify-center items-center mb-10">
                    <div className="w-full md:w-[70%]">
                        <p className="text-onPrimary text-center text-sm font-semibold font-sans">
                            Quote
                        </p>
                        <h2 className="text-3xl md:text-5xl leading-tight text-center text-primary font-sans font-bold">
                            Request your quote
                        </h2>
                        <p className="text-text/80 mt-5 text-center text-[18px] md:text-xl font-sans">
                            Tell us what you need and our team will get in touch with you.
                        </p>
                    </div>
                </div>

                <div className="flex max-lg:flex-col max-md:scale-105 md:justify-between bg-white rounded-2xl">
                    <div className="inline-flex px-5 flex-col lg:w-[65%]
                        md:px-10 py-10 items-center text-white gap-6"
                    >
                        <div className="relative w-full h-70 border-2 border-dashed border-gold rounded-xl scale-100">
                            <Image
                                src="/tractor2.jpg"
                                alt="image"
                                fill
                                priority
                                className="rounded-xl"
                            />
                            <div className="absolute left-4 top-4 z-10">
                                <span className="inline-flex bg-gold rounded-md font-bold px-2 py-1
                                    tracking-[0.12em] text-[11px] uppercase translate-none text-primary"
                                >
                                    Request a quote
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col text-white/85 w-full gap-4">
                            {HowItWorks.map((item,index) => (
                                <div key={item.title} className="inline-flex rounded-xl gap-5 w-full">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold
                                        rounded-lg bg-onPrimary font-sans transition-all duration-100 text-white
                                        hover:bg-gold hover:text-primary text-[15px] shadow-sm"
                                    >
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                    <div className="inline-flex gap-1 text-sm flex-col">
                                        <span className="text-primary font-semibold">{"Tell us what you need"}</span>
                                        <span className="text-text">
                                            {"Specify the type of machinery, service or product you're looking for."}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-cmyk/85 p-5 w-full rounded-2xl text-sm border border-gray-900/15">
                            <p className="text-text/85">
                                You can also call us or message us on WhatsApp for a faster response.
                            </p>
                        </div>
                        
                        <div className="inline-flex gap-3 w-full p-2">
                            <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                                {t("call")}
                            </Button>
                            <WhatsApp className=" bg-green-600 capitalize hover:bg-onPrimary/80" />
                        </div>
                    </div>

                    <div className="h-2 w-full bg-linear-to-r from-primary via-gold/85
                        to-primary lg:h-240 lg:w-2 md:bg-linear-to-b"
                    />

                    <div className="flex flex-col rounded-b-2xl lg:rounded-r-2xl gap-10
                        w-full px-5 md:px-10 py-8 md:py-10 bg-cmyk/95 text-black"
                    >
                        <div>
                            <h3 className="text-2xl my-3 font-sans text-primary font-bold leading-[1.15]">
                                {t("sous-title")}
                            </h3>
                            <span className="text-text text-base whitespace-normal">
                                {t("description")}
                            </span>
                        </div>
                        {isSubmited ? (
                            <FormSuccess />
                        ): (
                        <Form
                            handleSubmited={handleSubmited}
                            isSubmited={isSubmited}
                            isSubmiting={isSubmiting}
                        >
                            <input type="text" className="hidden" name="locale" />
                            <ul className="inline-flex max-md:flex-col justify-between gap-2 lg:gap-10">
                                <li className="inline-flex flex-col w-full gap-1">
                                    <label>Name</label>
                                    <input type="text" name="name" required className="w-full px-2 py-3 bg-cmyk/15 border
                                        border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                    />
                                </li>
                                <li className="inline-flex flex-col w-full gap-2">
                                    <label>{t("phone")}</label>
                                    <input type="number" name="prenom" required inputMode="numeric" className="w-full px-2 py-3 bg-cmyk/15 border
                                        border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                    />
                                </li>
                            </ul>
                            <div className="inline-flex flex-col gap-1">
                                <label>Email</label>
                                <input type="text" name="mail" required className="w-full p-2 md:py-3 bg-cmyk/15 border
                                    border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                />
                            </div>
                            <div className="inline-flex flex-col gap-2">
                                <span>De quoi avez-vous besoin?</span>
                                <div className="grid md:grid-cols-2 gap-2">
                                {options.map((item) => (
                                    <label key={item.name} className="flex cursor-pointer items-center gap-3 rounded-xl border
                                        border-primary/10 bg-cmyk/15 px-4 py-3 text-sm transition-all hover:border-primary/30
                                        has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-2
                                        has-[:checked]:ring-primary/10"
                                    >
                                        <input  className="h-4 w-4 shrink-0 accent-primary outline-0" type="radio"
                                            value="Buy machinery" name="need"
                                        />
                                        <span className="font-medium text-black/55">{item.name} </span>
                                    </label>
                                ))}
                                </div>
                            </div>
                            <div className="inline-flex flex-col gap-1">
                                <label>message</label>
                                <textarea id="message" name="message" rows={6}
                                    placeholder="Décrivez votre demande..." required
                                    className="w-full p-2 bg-cmyk/15 border outline-none text-text font-normal
                                    border-text/15 rounded-xl focus:border-primary/85 focus:outline-none"
                                >
                                </textarea>
                            </div>
                        </Form>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    )
}