import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { LanguageSwitcher } from "../navigation/LanguageSwitcher";


export function PreHedear () {
    
    return (
        <div className="bg-primary py-2">
            <Container className={cn("flex h-10 items-center justify-between")}> 
                <div className="flex items-center gap-5">
                    <MapPin size={18} />
                    <span className="font-normal text-white/70">Elche, Alicante </span>
                </div>
                <div className={cn("flex justify-around gap-5 text-md")}>
                    <div className=" hidden md:flex justify-between items-center gap-4">
                        <Link href={""} className={cn("font-bold hover:text-gold transition line-clamp-1")}>
                            614 651 150
                        </Link>
                        <Link href={""} className={cn("font-bold hover:text-gold transition line-clamp-1")}>
                            WhatsApp
                        </Link>
                    </div>
                    <LanguageSwitcher />
                </div>
            </Container>
        </div>
    )
}