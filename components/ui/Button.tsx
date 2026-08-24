"use client";

import { cn } from "@/lib/utils/cn";
import { Link } from "@/i18n/navigation";


type RequestQuoteProps = {
    children: React.ReactNode,
    className?: string
};

export function Button ({children, className}: RequestQuoteProps) {

    return (
        <Link href={"/"}
            className={cn(
                `flex items-center justify-center bg-onPrimary font-semibold font-sans px-6 py-3
                text-center text-white rounded-lg hover:bg-primary transition-all shadow`,
                className
            )}
        >
            {children}
        </Link>
    )
}