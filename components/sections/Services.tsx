import { Section } from "../ui/Section";
import { Link } from "@/i18n/navigation";
import { services } from "@/lib/constants";
import { Container } from "../ui/Container";
import { Card, CardParagraphy, CardTitle } from "../ui/Card";
import { useTranslations } from "next-intl";


export function Services () {
    const t = useTranslations("Section-services");
    
    return (
        <Section className="bg-primary max-md:px-3">
            <Container className="py-15">
                <div className="flex flex-col gap-15 md:gap-20">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="">
                        <span className="text-gold font-bold font-sans leading-[1.05]">{t("annonce")} </span>
                        <h2 className="text-3xl md:text-5xl mt-5 font-sans font-bold leading-[1.05] text-white">
                            {t("title")}
                        </h2>
                    </div>
                    <div className="flex md:place-items-end-safe md:text-end">
                        <p className="break-all">{t("description")} </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {services.map((item,index) => (
                        <Card key={item.name} className="group p-6 grid bg-white/4 gap-5 border-onPrimary/35
                            hover:border-gold/20 hover:bg-white/8 transition-all delay-100 scale-105"
                        >
                            <span className="group-hover:text-gold/60 text-gold/25 font-sans font-bold text-4xl">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <CardTitle>{item.name} </CardTitle>
                            <CardParagraphy className="text-white/55">
                                Tracteurs, mini-tracteurs, motoculteurs, outils agricoles et bien plus encore.
                            </CardParagraphy>
                            <Link href={""} className="group inline-flex items-center text-gold/95">
                                <span>Voir les machines</span>
                                <span className="transition-transform translate-x-2 duration-400 group-hover:translate-x-3">
                                    →
                                </span>
                            </Link>
                        </Card>
                    ))}

                </div>
                </div>
            </Container>
        </Section>
    )
}