import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import image from "@/public/champ.jpg";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";


export function Hero() {
    const t = useTranslations("RequeQuotePage")

    return (
        <Section className="relative overflow-hidden max-md:px-3 h-100">
            
            <Image
                src={image}
                alt="image champs"
                fill
                loading="lazy"
                className={cn(`block absolute inset-y-0 
                    w-full bg-cover bg-center bg-no-repeat scale-105`
                )}
            />

            <div className={cn(`absolute inset-0 bg-linear-to-r from-[#183d25]/90
                via-[#01261f]/90 via-100% to-transparent border-none`
            )}/>

            <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex bg-gold rounded-md font-bold px-2 py-1
                    tracking-[0.12em] text-[11px] uppercase translate-none text-primary"
                >
                    Request a quote
                </span>
            </div>
            
            <Container className="relative z-10 flex flex-col justify-center h-full max-md:scale-105 gap-5 md:gap-3">
                <div>
                    <span className="inline-flex bg-gold/35 text-gold z-50 rounded-3xl px-2 py-1
                        tracking-[0.12em] text-[11px] uppercase font-bold font-sans translate-none"
                    >
                        quote
                    </span>
                </div>
                <div className="inline-flex flex-col gap-5 md:gap-3 md:max-w-220 ">
                    <h1 className={cn(" text-3xl md:text-5xl leading-tight text-white font-sans font-bold")}>
                        {t("title")}
                    </h1>
                    <span className="text-lg text-white/75">
                        {t("description")}
                    </span>
                </div>
            </Container>
        </Section>
    )
}