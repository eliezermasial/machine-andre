import Image from "next/image";
import { Dot } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useTranslations } from "next-intl";


export function TechnicalService () {
    const t = useTranslations("TechnicalService");

    return (
        <Section className="bg-white max-md:px-3">
            <Container>
                <div className="flex max-lg:flex-col overflow-x-hidden max-md:scale-105 max-md:my-15
                    justify-between lg:gap-15 shadow-2xl"
                >
                    <div className="relative w-full h-115 border-r-2 border-dashed border-primary/75">
                        <Image
                            src="/mini-tracteur.jpg"
                            alt="image assistance"
                            fill
                            priority
                            className=" object-cover rounded-sm border-3 border-r-4 border-dashed border-gold"
                        />
                        <div className="absolute left-4 top-4 z-10">
                            <span className="inline-flex bg-gold rounded-md font-bold px-2 py-1
                                tracking-[0.12em] text-[11px] uppercase text-primary"
                            >
                                Servicio técnico
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-6 max-lg:pl-5 max-lg:py-10
                        max-lg:border-l-4 rounded-l-lg max-lg:border-gold md:pr-5">
                        <div className="inline-block">
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-onPrimary">
                                {t("sous-title")}
                            </span>
                            <h2 className="text-3xl my-3 md:text-5xl font-sans font-bold leading-[0.95] text-primary">
                                {t("title")}
                            </h2>
                            <p className=" md:max-w-full text-base whitespace-normal text-text">
                                {t("description")}
                            </p>
                        </div>
                        <div className="flex max-md:flex-col text-primary md:gap-10">
                            
                            <ul className="inline-flex flex-col font-semibold capitalize font-sans">
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Professional")}</span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Mechanical")} </span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Hydraulic")} </span>
                                </li>
                            </ul>
                            <ul className="inline-flex flex-col font-semibold capitalize font-sans">
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Electronic")} </span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Preventive")} </span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>{t("Spare-parts")}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Button className="inline-flex gap-1">
                                <span>{t("btn")}</span>
                                <span>→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}