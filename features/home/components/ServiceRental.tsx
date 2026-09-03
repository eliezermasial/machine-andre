import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Check } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { Section } from "../../../components/ui/Section";
import { Container } from "../../../components/ui/Container";


export function ServiceRental () {
    return (
        <Section className="bg-white text-black">
            <Container>
                <div className="bg-green-600 flex justify-beetwene">
                    <div className="bg-yellow-500">
                        <div>
                            <h2>
                                Besoin de matériel pour une seule campagne ?
                            </h2>
                            <span>
                                Louez le matériel dont vous avez besoin sans investissement permanent.
                            </span>
                        </div>
                        <div className="flex flex-col text-white/85 gap-3">
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11"
                            >
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Check size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">Tracteurs</span>
                                    
                                </div>
                            </div>
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11">
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Check size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">Mini tracteurs</span>
                                </div>
                            </div>
                            <div className="inline-flex rounded-xl gap-5 w-full bg-white/8 py-4 px-6 border
                                border-white/15 transition-all delay-100 hover:border-gold/30 hover:bg-white/11">
                                <div className="inline-flex items-center rounded-lg justify-center h-10 w-10 bg-gold/25">
                                    <Check size={20} className="text-gold/85" />
                                </div>
                                <div className="inline-flex gap-1 text-sm flex-col">
                                    <span className="text-gold font-semibold">Équipements de préparation</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex gap-3">
                            <Button className="bg-onPrimary/75">
                                Vérifier la disponibilité
                            </Button>
                            <Button className="bg-green-600 capitalize hover:bg-onPrimary/80">
                                Appeler maintenant
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/tractor1.jpg"
                            alt="tractor one"
                            fill
                            className="z-5"
                        />
                        <div className={cn(`absolute inset-0 bg-linear-to-r from-transparent
                            via-[#183d25] via-20% md:via-5% to-[#183d25]`)}
                        />
                        <div>
                            <h2>
                                Nous préparons votre terrain pour semer le succès
                            </h2>
                            <span>Technologie et expérience au service de votre terre.</span>
                            <div className="">
                                <span>Préparation profonde</span>
                                <span>Labour agricole</span>
                                <span>Travail du sol</span>
                                <span>Nettoyage des parcelles</span>
                                <span>Conditionnement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}