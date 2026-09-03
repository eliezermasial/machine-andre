import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";


type WhatsAppIconProps = {
  children?: ReactNode,
  className?: string,
  href?: string
};

export function WhatsApp({children,className, href="https://wa.me/243820083703" }: WhatsAppIconProps) {
  return (
    <a href={href} target="_bank" rel="noopener noreferrer"
      className={cn(`flex items-center text-xs xs:text-sm md:text-base justify-center 
        text-center text-white rounded-lg transition-all shadow font-semibold
        bg-green-600 capitalize hover:bg-onPrimary/80 px-6 py-3 font-sans`,
        className
      )}
    >
      {children}      
    </a>
  );
}