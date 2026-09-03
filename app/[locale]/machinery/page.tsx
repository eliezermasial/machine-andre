import { Hero } from "@/components/sections/Hero";
import { CategoryGrid } from "@/features/machines/components/CategoryGrid";

import image from "@/public/motoculteur.jpg"

export default async function MachineryPage () {
    return (
        <>
            <Hero
                title="Machines agricoles prêtes à l'emploi"
                desc="Un équipement moderne et robuste, prêt à offrir des performances maximales sur le terrain."
                subtitle="machine agricol"
                image={image}
            />
            <CategoryGrid />

        </>
    )
}