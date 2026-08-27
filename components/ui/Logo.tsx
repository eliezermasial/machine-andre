import { cn } from "@/lib/utils/cn";

type LogoProps = {
    className?: string,
    name?: string,
    lastName?: string,
};

export function Logo ({className,name,lastName }: LogoProps) {
    return (
        <div className="flex gap-2 items-center">
            
            <div className={cn(
                "relative bg-primary flex z-10 justify-center items-center p-3 h-11 w-11 border-b-5 border-gold rounded-lg",
                className
            )}>
                <span className="text-xl font-extrabold text-gold">MA</span>
            </div>
            {(name || lastName) && (
                <div className="hidden md:flex flex-col">
                    <span className={cn(`font-sans text-primary text-sm font-bold uppercase`)}>
                        {name}
                    </span>
                    <span className={cn(`font-mono text-onPrimary font-normal text-sm uppercase`)}>
                        {lastName}
                    </span>
                </div>
            )}
        </div>
    )
}