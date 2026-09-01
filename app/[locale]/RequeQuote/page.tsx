import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/features/RequeQuote/components/Hero";
import { Contact } from "@/features/RequeQuote/components/Contact";
import { RequestQuote } from "@/features/RequeQuote/components/RequestQuote";


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
            <RequestQuote />
            <Contact />
        </>
    )
}