import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import image from "@/public/champ.jpg";
import { RequestQuote } from "@/features/RequeQuote/components/RequestQuote";
import { Contact } from "@/features/RequeQuote/components/Contact";
import { Hero } from "@/components/sections/Hero";



export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Metadata")
    return {
        title: t("title"),
        description: t("description")
    };
}

export default async function RequeQuote () {
    const t = await getTranslations("RequeQuotePage")
    return (
        <>
            <Hero 
                title={t("title")} 
                subtitle="Request a quote" 
                desc={t("description")}
                image={image}
            />
            <RequestQuote />
            <Contact />
        </>
    )
}