import { cn } from "@/lib/utils/cn";

export function Logo () {
    return (
        <div className="flex gap-2 items-center">
            
            <div className={cn(
                "relative bg-primary flex z-10 justify-center items-center p-3 h-11 w-11 border-b-5 border-gold rounded-lg"
            )}>
                <span className="text-xl font-extrabold text-gold">MA</span>
            </div>
        
            <div className="hidden md:flex flex-col">
                <span className="font-sans text-primary text-sm font-bold uppercase">
                    MAQUINARIA
                </span>
                <span className="font-mono text-onPrimary font-normal tex-sm uppercase">
                    ANDRés
                </span>
            </div>
        </div>
    )
}