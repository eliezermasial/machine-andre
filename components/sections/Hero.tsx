"use client";

import { cn } from "@/lib/utils/cn";
import { Button } from "../ui/Button";
import { motion } from "motion/react";
import image from "@/public/tracteur.jpg";
import { useTranslations } from "next-intl";
import { Container } from "../ui/Container";
import { Counter } from "../animations/Counter";


export function Hero() {

    const t = useTranslations("HomePage");
    const btnText = useTranslations("Button");

    return (
        <section className={cn(` 
            relative h-full overflow-hidden border-r-4 border-t[50%]
            max-md:px-3 border-dashed border-gold font-sans pt-30 
        `)}
        >
            <div className={cn(`absolute inset-0 bg-linear-to-r from-transparent
                via-[#183d25] via-5% to-[#183d25]`)}
            />
            
            <div className={cn(`hidden md:block absolute inset-y-0 right-0 border-l-2 border-dashed 
                    border-onPrimary w-[47%] bg-cover bg-center bg-no-repeat scale-105`
                )}
                style={{ backgroundImage: `url(${image.src})` }}
            >
                <div className={cn(`absolute inset-0 bg-linear-to-r from-[#183d25]/90
                    via-[#01261f]/50 via-35% to-transparent border-none`
                )}/>
            </div>

            <div className="absolute inset-0 bg-[#01261f]/10"/>

            <Container className="relative z-10 flex flex-col h-full justify-center items-center scale-105">
                <motion.div
                    initial={{ opacity: 0, y:120, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.05, 
                        ease: [0.215, 0.610, 0.355, 1.000],
                    }}
                >
                <div className="flex flex-col gap-8 md:gap-15 max-md:px-4 md:px-6">
                    <div>
                        <div className="flex justify-start items-center gap-3 mb-5">
                            <span className="text-sm uppercase text-gold font-sans font-bold">{t("experience")} </span>
                            <hr className="text-gold w-15"/>
                        </div>
                        <h1 className={cn("display-lg leading-tight text-white font-sans font-bold")}>
                            {t('title')}
                            <br/>
                            <span className={cn("block leading-tight text-gold mt-4 md:mt-2")}>
                                {t("sous-title")}
                            </span>
                        </h1>
                        <div className="mt-5">
                            {t("description")
                            .split(",")
                            .map((text, index, array) => (
                            <p key={index} className="text-white/75 text-lg leading-relaxed font-semibold font-sans">
                                {text}
                                {index < array.length - 1 && (
                                <>
                                    ,
                                    <br />
                                </>
                                )}
                            </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex max-md:flex-col justify-start gap-5 ">
                        <Button>
                            {btnText("View machinery")}
                        </Button>
                        <Button className={cn(`bg-transparent border-3 border-white text-white
                            hover:bg-white hover:text-primary
                            `)}
                        >
                            {btnText("RequestQuote")}
                        </Button>
                    </div>
                    <div className="flex items-center max-md:justify-center gap-5">
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {t("Sales")}
                        </span>
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {t("Rental")}
                        </span>
                        <span className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {t("Repair")}
                        </span>
                        <span className="bg-white/10 whitespace-nowrap border border-white/20 rounded-lg px-2 py-1 text-[13px]">
                            {t("AgriculturalService")}
                        </span>
                    </div>

                    <div className="flex justify-between border-4 border-gold/50 z-10 border-b-none rounded-lg w-full">
                        <div className="flex flex-col md:hidden w-full px-4 py-4 items-center scale-115 justify-center">
                            <Counter suffix="+" target={40} className="text-3xl font-bold font-mono text-gold"/>
                            <span className="text-white/85 whitespace-nowrap">{t("Yearsexperience")} </span>
                        </div>
                        <div className="flex flex-col md:hidden w-full px-8 py-3 scale-115 items-center justify-center">
                            <Counter suffix="%" target={100} className="text-3xl font-bold font-mono text-gold"/>
                            <span className="text-white/85">{t("Commitment")} </span>
                        </div>
                        <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            <Counter suffix="+" target={40} className="text-3xl font-bold font-mono text-gold"/>
                        </div>
                        <div className=" hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            <Counter suffix="%" target={100} className="text-3xl font-bold font-mono text-gold"/>
                        </div>
                        <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            <span className="text-3xl font-bold font-mono text-gold">MULTI-BRAND</span>
                        </div>
                        <div className="hidden md:flex w-full px-4 pt-5 pb-1 scale-115 justify-center">
                            <span className="text-3xl font-bold font-mono text-gold">FAST</span>
                        </div>
                    </div>
                </div>
                </motion.div>
            </Container>
        </section>
    )
}