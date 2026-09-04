import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { machines } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardParagraphy } from "@/components/ui/Card";


export function AvailableEquipment () {
    const t = useTranslations("machinery")
    const T = useTranslations("Machine-page")
    return (
        <Section className="bg-white max-md:px-3 overflow-hidden">
            <Container className="max-md:py-25">
                <div className="flex flex-col overflow-hidden max-md:scale-107 gap-10">
                    <div className="flex max-md:flex-col p-2 justify-between gap-5 max-md:gap-8">
                        <div className="scale-100">
                            <h2 className="text-3xl md:text-5xl text-primary my-5 font-sans font-bold leading-[1.05]">
                                {T("section-equipement-title")}
                            </h2>
                            <p className="md:max-w-xl text-md text-text">
                                {t("section-equipement-desc")}
                            </p>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col gap-5 max-md:justify-center md:items-center mb-5
                    text-black px-5 md:px-10 py-5 border border-gray-300/55 text-sm shadow-md rounded-2xl md:mx-2"
                    >
                        <span className="text-onPrimary/45 font-semibold font-sans">Catégorie:</span>
                        <select className="border border-gray-300/45 text-primary/75 rounded-lg font-sans
                            py-3 focus:outline-1 outline-primary/75 px-5"
                        >
                            <option>Catégorie</option>
                            <option>tous</option>
                        </select>
                        <select className="border border-gray-300/45 text-primary/75 rounded-lg font-sans
                            py-3 focus:outline-1 outline-primary/75 px-5">
                            <option>Marque</option>
                            <option>tous</option>
                        </select>
                        <select className="border border-gray-300/45 text-primary/75 rounded-lg font-sans
                            py-3 focus:outline-1 outline-primary/75 px-5">
                            <option>État</option>
                            <option>tous</option>
                        </select>
                        <select className="border border-gray-300/45 text-primary/75 rounded-lg font-sans px-5
                            py-3 focus:outline-1 outline-primary/75">
                            <option>Prix</option>
                            <option>tous</option>
                        </select>
                        <select className="border border-gray-300/45 text-primary/75 rounded-lg font-sans px-5
                            py-3 focus:outline-1 outline-primary/75">
                            <option>puissance</option>
                            <option>tous</option>
                        </select>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-1 pb-5">
                    {machines.map((item) => (
                        <Card key={item.name} className="group relative w-full md:max-w-97.5 border-0
                            overflow-hidden rounded-2xl hover:border-0 shadow-lg delay-200
                            transition-transform shadow-gray-500/35 scale-100 hover:scale-99"
                        >
                            <CardHeader className="relative h-60 mb-0 overflow-hidden scale-100">
                                <Link href={""} className="relative block h-full w-full">
                                    <Image src={item.src} alt={item.alt} fill loading="lazy"
                                        className="object-cover transition-transform duration-100
                                        border-2 border-dashed border-gold/75 group-hover:scale-103 "
                                    />
                                    <div className="absolute inset-0 bg-black/10" />
                    
                                    <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t
                                        from-[#050706] via-[#004d35]/80 to-transparent"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                                        <span>Tracteurs</span>
                                        <h3 className="text-2xl font-bold font-sans capitalize leading-tight text-white">
                                            {t(item.name)}
                                        </h3>
                                    </div>
                                </Link>
                            </CardHeader>
                            
                            <Badge>
                                {t(item.name)}
                            </Badge>
                            <Badge className="left-5 top-7">
                                {"Occasion"}
                            </Badge>

                            <CardContent className="bg-white p-5 z-10">
                                <CardParagraphy className="max-w-85 text-sm leading-relaxed text-black/75">
                                    Tracteur Startrac 273 4WD Bagheera. Machine disponible dans notre catalogue avec photos réelles.
                                </CardParagraphy>
                                <div className="group/link inline-flex max-md:flex-col items-stretch justify-center
                                    font-bold font-sans uppercase tracking-wide text-gold/95 mt-4 gap-2 w-full"
                                >
                                    <Button className="bg-transparent text-primary border-2 border-onPrimary text-nowrap text-start
                                        capitalize hover:bg-onPrimary hover:text-white transition-all delay-100"
                                    >
                                        {T("btn-view")}
                                    </Button>
                                    <Button className="text-start capitalize">
                                        {T("btn-Request")}
                                    </Button>
                                </div>
                            </CardContent>           
                        </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}