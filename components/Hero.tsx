"use client";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("HomePage");
    console.log(t("title"))
    return (
        <div>
            <h1>{t("title")}</h1>
        </div>
    )
}