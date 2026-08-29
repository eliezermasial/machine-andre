import Image from "next/image";
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils/cn";
import { Droplet} from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/constants";
import { Container } from "../ui/Container";


export function Products() {
    return(
        <Section className="bg-primary max-md:px-3 overflow-x-hidden">
            <Container>
                <div className="max-md:scale-107 overflow-x-hidden py-10 md:py-20">
                    <div className="flex max-lg:flex-col justify-between max-md:gap-8 mb-10">
                        <div className="scale-100">
                            <span className="text-gold font-semibold font-sans leading-[1.05]">
                                Produits
                            </span>
                            <h2 className={cn("text-3xl md:text-5xl mt-5 md:my-5 leading-tight text-white font-sans font-bold")}>
                                Tout commence par
                                <br/>
                                <span className={cn("block leading-tight text-gold mt-2")}>
                                    une bonne récolte
                                </span>
                            </h2>
                        </div>
                        <div className="flex flex-col lg:justify-center gap-10 lg:items-end lg:text-end scale-100">
                            <p className=" md:max-w-md text-lg whitespace-normal text-white/75">
                                Un équipement moderne et robuste, conçu pour offrir des performances maximales.
                            </p>
                            <Button className="hidden md:flex group bg-transparent border-2 border-white/85
                                hover:bg-white hover:text-primary transition-all delay-200 text-white/85"
                            >
                                <span>Voir les machines</span>
                                <span className="translate-x-1 group-hover:translate-x-2 transition-transform duration-300">
                                    →
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {products.map((item) => (
                            <Card key={item.name} className="group relative h-110 w-full md:max-w-97.5 border
                                overflow-hidden rounded-2xl border-white/10 delay-200
                                transition-transform scale-100 hover:scale-99 hover:border-gold/10"
                            >
                                <Link href={""} className="grid gap-5">
                                    <div className="absolute left-4 top-4 z-10">
                                        <span className="inline-flex bg-gold rounded-md font-bold px-2 py-1
                                            tracking-[0.12em] text-[11px] uppercase text-primary"
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="absolute inset-x-0 top-0 h-[58%] transition-transform duration-500
                                         group-hover:scale-105">
                                        <Image src={item.src} alt={item.alt} fill priority
                                            className="object-cover border-3 border-b-0 border-dashed border-gold/75"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 to-transparent 
                                            from-[#004d35] h-[45%] via-[#004d35]/80 bg-linear-to-t"
                                        />
                                    </div>
                                    
                                    <div className="absolute grid gap-5 bg-white/5 transition delay-200
                                        group-hover:bg-white/10 inset-x-0 bottom-0 z-10 p-5">
                                        <div className="flex items-center justify-center w-12 h-12
                                            bg-white/10 group-hover:bg-gold/15 border border-onPrimary/45 rounded-full">
                                            <Droplet size={18} color="gold" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-sans capitalize leading-tight text-white">
                                                {item.name}
                                            </h3>
                                            <div className="group/link mt-5 inline-flex items-center gap-1
                                                font-bold font-sans text-sm uppercase tracking-wide text-gold/95"
                                            >
                                                <span>{"Voir l'équipement"}</span>
                                                <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                    <div className="inline-flex justify-center w-full md:hidden mt-10">
                        <Button className=" group bg-transparent border-2 border-white/85
                            hover:bg-white hover:text-primary transition-all delay-200 text-white/85"
                        >
                            <span>Voir les machines</span>
                            <span className="translate-x-1 group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </span>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}