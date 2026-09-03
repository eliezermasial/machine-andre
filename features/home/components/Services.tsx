"use client";

import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Container } from "../../../components/ui/Container";
import { Card,  CardParagraphy, CardTitle  } from "@/components/ui/Card";


export function Services () {
    const t = useTranslations("Section-services");
    
    return (
        <section className="bg-white sm:py-15 lg:py-20 overflow-x-hidden">
            <div className="bg-primary [clip-path:polygon(0_0,100%_0,100%_91%,0_100%)]
                md:[clip-path:polygon(0_0,100%_0,100%_90%,0_100%)] max-md:px-3 py-10 md:py-20"
            >
                <Container>
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
                    <div className="flex flex-col gap-15 overflow-x-hidden max-md:scale-105 py-20 md:gap-20">
                        <div className="flex gap-5 max-md:flex-col">
                            <div>
                                <span className="text-gold font-bold font-sans leading-[1.05]">{t("annonce")}</span>
                                <h2 className="text-3xl md:text-5xl mt-5 font-sans font-bold leading-[1.05] text-white">
                                    {t("title")}
                                </h2>
                            </div>
                            <div className="flex md:place-items-end-safe md:text-end">
                                <p className="break-all text-white/55">{t("description")}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                            {services.map((item,index) => (
                                <Card key={item.name} className="group p-6 grid bg-white/4 gap-2 border-onPrimary/45 shadow-sm
                                    hover:border-gold/10 hover:bg-white/8 shadow-onPrimary/8 transition-all delay-100"
                                >
                                    <span className="group-hover:text-gold/60 text-gold/25 font-sans font-bold text-4xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <CardTitle>{t(item.name)} </CardTitle>
                                    <CardParagraphy className="text-white/55">
                                        {t(item.descr)}
                                    </CardParagraphy>
                                    <Link href={""} className="group inline-flex py-1 items-center text-gold/95">
                                        <span>Voir les machines</span>
                                        <span className="transition-transform translate-x-2 duration-400
                                            group-hover:translate-x-3"
                                        >
                                            →
                                        </span>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                    </motion.div>
                </Container>
            </div>
        </section>
    )
}