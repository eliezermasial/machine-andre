"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { useTranslations } from "next-intl";

const navLinks = [
    {key: "Home", href: "/"},
    {key: "Machinery", href: "/machinery"},
    {key: "Services", href: "/services"},
    {key: "Rental", href: "/rental"},
    {key: "Products", href: "/products"},
    {key: "About", href: "/about"},
    {key: "Contact", href: "/contact"},
] as const;
 
export function Navigation () {
    const t = useTranslations("Navigation");

    return (
        <nav className={cn(" hidden md:flex justify-center items-center gap-2")}>
            {navLinks.map((link) => (

                <Link key={link.key} href={link.href}
                    className={cn("capitalize text-primary text-md font-semibold transition-all font-sans p-2 hover:bg-gray-100 hover:rounded-lg")}
                >
                    {t(link.key)}
                </Link>
            ))}
        </nav>
    )
}