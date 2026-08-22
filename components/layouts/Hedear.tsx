"use client";

import { useState } from "react";
import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils/cn";
import { ListFilter } from "lucide-react";
import { Container } from "../ui/Container";
import { RequestQuote } from "../ui/RequestQuote";
import { Navigation } from "../navigation/Navigation";
import { MenuMobile } from "../navigation/MenuMobile";
import { useTranslations } from "next-intl";


export function Hedear() {
    const [openMobile, setOpenMobile] = useState<boolean>(false);
    const t = useTranslations("RequestQuote");

    const handleMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenMobile(true);
    }

    const handleClosedMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenMobile(false);
    }

    return (
        <header className={cn("relative bg-white flex items-center py-5")}>
            <Container className={cn("flex justify-between w-full ")}>
                <Logo />
                <Navigation />
                <div className="flex justify-baseline items-center gap-3 ">
                    <RequestQuote>
                        {t("title")}
                    </RequestQuote>
                    <button className={cn(`flex justify-center items-center md:hidden p-2
                        border border-gray-300 rounded-lg cursor-pointer`)}
                        onClick={handleMobile}
                    >
                        <ListFilter size={24} color="black" />
                    </button>
                </div>

                {openMobile && (
                    <MenuMobile handleClosedMobile={handleClosedMobile} />
                )}
                    
                
            </Container>
        </header>
    )
}