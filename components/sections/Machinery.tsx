import Image from "next/image";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Link } from "@/i18n/navigation";
import { machines } from "@/lib/constants";
import { Container } from "../ui/Container";


export function Machinery() {

    return(
        <Section className="bg-white max-md:px-3">
            <Container className="">
                <div className="grid gap-10">
                    <div className="flex max-md:flex-col justify-between max-md:gap-8">
                        <div className="scale-100">
                            <span className="text-primary font-semibold font-sans leading-[1.05]">Machinerie</span>
                            <h2 className="text-3xl md:text-5xl text-primary my-5 font-sans font-bold leading-[1.05]">
                                Machines prêtes à fonctionner
                            </h2>
                            <p className="md:max-w-xl text-md text-text">
                                Un équipement moderne et robuste, conçu pour offrir des performances maximales.
                            </p>
                        </div>
                        <div className="flex md:items-end-safe scale-100">
                            <Button className="bg-transparent text-onPrimary border-onPrimary
                                border-3 hover:bg-onPrimary hover:text-white"
                            >
                                Voir les machines
                            </Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {machines.map((item) => (
                            <Card key={item.name} className="group relative h-130 w-full p-0.5 max-w-97.5 border-2
                                overflow-hidden rounded-2xl border-b-0 border-dashed hover:shadow-lg delay-200
                                border-gold/75 transition-transform shadow-gray-500/45 scale-100 hover:scale-99"
                            >
                                <Link href={""}>
                                    <Image src={item.src} alt={item.alt} fill priority
                                        className=" object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10" />

                                    <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t
                                        from-[#004d35] via-[#004d35]/80 to-transparent"
                                    />

                                    <div className="absolute left-4 top-4 z-10">
                                        <span className="inline-flex bg-gold rounded-md font-bold px-2 py-1
                                            tracking-[0.12em] text-[11px] uppercase text-primary"
                                        >
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                                        <h3 className="text-2xl font-bold font-sans capitalize leading-tight text-white">
                                            {item.name}
                                        </h3>
                                        <p className="mt-3 max-w-85 text-sm leading-relaxed text-white/75">
                                            Matériel de travail du sol et de préparation des sols.
                                        </p>
                                        <div className="group/link mt-3 inline-flex items-center gap-1
                                            font-bold font-sans text-sm uppercase tracking-wide text-gold/95"
                                        >
                                            <span>{"Voir l'équipement"}</span>
                                            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}