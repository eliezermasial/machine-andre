"use client";

import { useState } from "react";
import { Form } from "../../../components/ui/Form";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { WhatsApp } from "../../../components/ui/WhatsApp";
import { useTranslations } from "next-intl";
import { Container } from "../../../components/ui/Container";
import { FormSuccess } from "../../../components/ui/FormSuccess";
import { arraySelectedOption } from "@/lib/constants";
import { MapPinCheckInside, Phone, Mail, Clock } from "lucide-react";


export function ContactSection () {

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
        <Section className="bg-primary max-md:px-3">
            <Container>
                <div className="flex max-lg:flex-col md:justify-between
                    border border-white rounded-2xl"
                >
                    <div className="inline-flex px-5 flex-col lg:w-[65%] md:border-r border-white/55
                        md:px-10 py-10 justify-center text-white gap-6"
                    >
                        <div>
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-gold">
                                contact
                            </span>
                            <h2 className="text-3xl my-5 font-sans font-bold leading-[1.15]">
                                {t("title")}
                            </h2>
                            <span className="text-white/65 text-base whitespace-normal">
                                {t("description")}
                            </span>
                        </div>
                        <div className="flex flex-col text-white/85 gap-3">
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11"
                            >
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <MapPinCheckInside size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">{t("Address")}</span>
                                    <span>Av. de Dolores, 31</span>
                                    <span>03203 Elche, Alicante</span>
                                </div>
                            </div>
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11">
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Phone size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">{t("phone")} </span>
                                    <span>614 651 150</span>
                                </div>
                            </div>
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11">
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Mail size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">Email</span>
                                    <span>info@maquinariaandres.es</span>
                                </div>
                            </div>
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11">
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Clock size={20} className="text-gold/85"/>
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">{t("Opening-hours")}</span>
                                    <span>{t("off")} </span>
                                    <span>{t("on")}</span>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex gap-3">
                            <Button className="bg-onPrimary/75">
                                {t("call")}
                            </Button>
                            
                            <WhatsApp className=" bg-green-600 capitalize hover:bg-onPrimary/80">
                                Whatsapp
                            </WhatsApp>
                        </div>
                    </div>

                    <div className="h-2 w-full bg-linear-to-r from-primary via-gold/85
                        to-primary md:h-200 md:w-2 md:bg-linear-to-b"
                    />

                    <div className="flex flex-col max-md:rounded-b-2xl md:rounded-r-2xl gap-10
                        w-full px-5 md:px-10 py-8 md:py-15 bg-cmyk/95 text-black"
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
                            <ul className="inline-flex max-md:flex-col justify-between gap-5 lg:gap-10">
                                <li className="inline-flex flex-col w-full gap-2">
                                    <label>Name</label>
                                    <input type="text" name="name" required className="w-full p-2 md:p-4 bg-cmyk/15 border
                                        border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                    />
                                </li>
                                <li className="inline-flex flex-col w-full gap-2">
                                    <label>{t("phone")} </label>
                                    <input type="number" name="prenom" required inputMode="numeric" className="w-full p-2 md:p-4 bg-cmyk/15 border
                                        border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                    />
                                </li>
                            </ul>
                            <div className="inline-flex flex-col gap-2">
                                <label>Email</label>
                                <input type="text" name="mail" required className="w-full p-2 md:p-4 bg-cmyk/15 border
                                    border-text/15 rounded-xl text-text font-normal focus:border-primary/85 focus:outline-none"
                                />
                            </div>
                            <div className="inline-flex flex-col gap-2">
                                <label>{t("selected")}</label>
                                <select id="tipo" name="tipo" required 
                                    className="w-full p-2 md:p-4 bg-cmyk/15 border outline-none transition-all
                                    border-text/15 text-text font-normal rounded-xl focus:border-primary/85
                                    focus:outline-none"
                                >
                                    {arraySelectedOption.map((option) => (
                                        <option key={option} value="">{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="inline-flex flex-col gap-2">
                                <label>message</label>
                                <textarea id="message" name="message" rows={6}
                                    placeholder="Décrivez votre demande..." required
                                    className="w-full p-2 md:p-4 bg-cmyk/15 border outline-none text-text font-normal
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