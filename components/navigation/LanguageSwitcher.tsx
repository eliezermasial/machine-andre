"use client";

import { cn } from "@/lib/utils/cn";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";


const languages: ("fr" | "en")[] = ["fr", "en"];

type LanguageSwitcherProps = {
    className?: string,
};

export function LanguageSwitcher({className}: LanguageSwitcherProps) {

    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    
    const changeLanguage = (locale: "en" | "fr") => {
        return router.replace(pathname, {locale})
    };

    return (
        <div role="group" aria-label="Language selector"
            className={cn(`
                flex items-center gap-0.5 rounded-md p-0.5 bg-white/10`,
                className
            )} 
        >
            {languages.map((language) => (
                <button
                    key={language}
                    className={cn(
                        `
                            flex items-center gap-1 rounded px-2 py-0.5 uppercase cursor-pointer text-[11px]
                            font-semibold transition-all duration-200
                        `,
                        locale === language ?
                        "bg-white text-primary" : "text-white/70 hover:text-white"
                    )}
                    aria-current={locale === language ? "true" :  undefined}
                    onClick={() => changeLanguage(language)}
                >
                    <span aria-hidden="true">{language === "fr"? '🇫🇷': '🇬🇧'}</span>{language}
                </button>
            ))}
        </div>
    )
}