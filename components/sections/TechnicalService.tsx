import Image from "next/image";
import { Dot } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";


export function TechnicalService () {
    return (
        <Section className="bg-white max-md:px-3">
            <Container>
                <div className="flex max-lg:flex-col overflow-x-hidden max-md:scale-107 max-md:my-15 justify-between lg:gap-15 shadow-xl">
                    <div className="relative scale-100 w-full h-115 border-r-2 border-dashed border-primary/75">
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
                                Specialised technical service
                            </span>
                            <h2 className="text-3xl my-3 md:text-5xl font-sans font-bold leading-[1.15] text-primary">
                                Less downtime. More time working.
                            </h2>
                            <p className=" md:max-w-md text-base whitespace-normal text-text">
                                We diagnose, repair and maintain multi-brand agricultural machinery so your farm keeps running.
                            </p>
                        </div>
                        <div className="flex max-md:flex-col text-primary md:gap-10">
                            
                            <ul className="inline-flex flex-col font-semibold capitalize font-sans">
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Professional diagnostics</span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Mechanical repairs</span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Hydraulic repairs</span>
                                </li>
                            </ul>
                            <ul className="inline-flex flex-col font-semibold capitalize font-sans">
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Electronic repairs</span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Preventive maintenance</span>
                                </li>
                                <li className="inline-flex items-center text-sm">
                                    <Dot size={30} className="text-onPrimary" />
                                    <span>Spare parts</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Button className="inline-flex gap-1">
                                <span>Request assistance</span>
                                <span>→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}