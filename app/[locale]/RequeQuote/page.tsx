import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/features/RequeQuote/components/Hero";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Metadata")
    return {
        title: t("title"),
        description: t("description")
    };
}

export default function RequeQuote () {
    return (
        <>
            <Hero />
        </>
    )
}