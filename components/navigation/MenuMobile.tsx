"use client";

import { X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { RequestQuote } from "../ui/RequestQuote";
import { LanguageSwitcher } from "./LanguageSwitcher";


type MenuMobile = {
    handleClosedMobile: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function MenuMobile ({handleClosedMobile}: MenuMobile) {
    const t = useTranslations("RequestQuote");

    return (
        <div className={cn("fixed inset-0 z-50 bg-primary/30 backdrop-blur-md flex flex-col items-end md:hidden")}>
            <div className="flex flex-col w-[80%] h-full max-h-screen bg-cmyk overflow-y-auto">
                <div className="flex justify-between border border-b-gray-300 px-3 py-5">
                    <Logo />
                    <button className={cn(`flex justify-center bg-white items-center md:hidden p-2
                        border border-gray-300 rounded-xl cursor-pointer`)}
                        onClick={handleClosedMobile}
                    >
                        <X size={24} color="gray" />
                    </button>
                </div>
                <div className=" bg-white flex flex-col gap-5 text-black px-3 py-5">
                    <Link href="/">
                        Accueil
                    </Link>
                    <div>
                        <h3>Matériel</h3>
                        <nav className="flex flex-col">
                            <Link href="">Tracteurs</Link>
                            <Link href={""}>Mini tracteurs</Link>
                            <Link href={""}>Tracteurs chenilles</Link>
                            <Link href={""}>Motoculteurs</Link>
                            <Link href={""}>Outillage agricole</Link>
                        </nav>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <nav className="flex flex-col">
                            <Link href="">Réparation et entretien</Link>
                            <Link href={""}>Préparation des sols</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={""}>Location</Link>
                        <Link href={""}>Produits</Link>
                        <Link href={""}>À propos</Link>
                        <Link href={""}>Contact</Link>
                    </div>
                </div>
                <div className="h-screen flex flex-col justify-around gap-1 md:gap-3 px-3 py-1 md:py-3">
                    <div>
                        <LanguageSwitcher className={cn("bg-gray-800/10")} />
                    </div>
                    <div>
                        <RequestQuote>
                            {t("title")}
                        </RequestQuote>

                        <RequestQuote className={cn(`
                            bg-transparent border-3 border-onPrimary text-onPrimary hover:bg-transparent
                        `)}>
                            appel
                        </RequestQuote>
                        <RequestQuote
                            className={cn("bg-green-500 hover:bg-green-500")}
                        >
                            whatsapp
                        </RequestQuote>
                    </div>
                </div>
            </div>
        </div>
    )
}