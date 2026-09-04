import { Hero } from "@/components/sections/Hero";
import { CategoryGrid } from "@/features/machines/components/CategoryGrid";
import { AvailableEquipment } from "@/features/machines/components/AvailableEquipment";


import image from "@/public/motoculteur.jpg"
import { getTranslations } from "next-intl/server";

export default async function MachineryPage () {
    const t = await getTranslations("Machine-page")
    return (
        <>
            <Hero
                title={t("title")}
                desc={t("desc")}
                subtitle={t("subtitle")}
                image={image}
            />
            <CategoryGrid />
            <AvailableEquipment />
        </>
    )
}