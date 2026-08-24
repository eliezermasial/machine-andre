"use client";

import { useState } from "react";
import { Logo } from "../ui/Logo";
import { cn } from "@/lib/utils/cn";
import { ListFilter } from "lucide-react";
import { Container } from "../ui/Container";
import { useTranslations } from "next-intl";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "../ui/Button";
import { Navigation } from "../navigation/Navigation";
import { MenuMobile } from "../navigation/MenuMobile";


export function Hedear() {
    const isScroll = useScroll();

    const [openMobile, setOpenMobile] = useState<boolean>(false);
    const t = useTranslations("Button");

    const handleMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenMobile(true);
    }

    const handleClosedMobile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenMobile(false);
    }

    return (
        <header className={cn("bg-white flex items-center border-gold py-5",
            isScroll? "fixed w-full z-100":"relative transition-discrete"
            )}
        >
            <Container className={cn("flex justify-between w-full ")}>
                <Logo />
                <Navigation />
                <div className="flex justify-baseline items-center gap-3 ">
                    <Button>
                        {t("RequestQuote")}
                    </Button>
                    <button className={cn(`flex justify-center items-center lg:hidden p-2
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