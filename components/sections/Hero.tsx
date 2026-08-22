"use client";


import { cn } from "@/lib/utils/cn";
import image from "@/public/tracteur.jpg";
import { useTranslations } from "next-intl";
import { Container } from "../ui/Container";


export function Hero() {

    const t = useTranslations("HomePage");

    return (
        <section className={cn(`
            relative h-[90vh] overflow-hidden border-r-3 border-t[50%]  max-md:px-3 border-dashed border-gold font-sans mb-50
        `)}
        >
            <div className={cn(`absolute inset-0 bg-linear-to-r from-transparent
                via-[#183d25] via-5% to-[#183d25]`)}
            />

            <div className={cn(`absolute inset-y-0 right-0 border-l-2 border-dashed border-onPrimary
                    w-[57%] bg-cover bg-center bg-no-repeat scale-105`
                )}
                style={{ backgroundImage: `url(${image.src})` }}
            >
                <div className={cn(`absolute inset-0 bg-linear-to-r from-[#183d25]/90
                    via-[#01261f]/50 via-35% to-transparent border-none`
                )}/>
            </div>

            <div className="absolute inset-0 bg-[#01261f]/10"/>
            <Container className="relative z-50 flex flex-col h-full justify-center items-start scale-105">
                
                <h1 className={cn(" display-lg leading-tight text-white font-sans font-bold")}>
                    {t('title')}
                    <br/>
                    <span className={cn("block leading-tight text-gold mt-1")}>
                        {t("sous-title")}
                    </span>
                </h1>
            
                <div className="max-w-xl">
                    <span className="inline-flex rounded-full bg-yelloAccent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-onBackground">
                        Expertise de confiance
                    </span>

                    <p className={cn("mt-6 text-surface")}>
                        Leader dans la distribution et lentretien de machines de haute
                        performance. Nous équipons les agriculteurs pour les défis de demain.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        
                    </div>
                </div>
            </Container>

        </section>
    )
}