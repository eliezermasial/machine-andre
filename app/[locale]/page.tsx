import { Hero } from "@/features/home/components/Hero";
import { Working } from "@/features/home/components/Working";
import { Services } from "@/features/home/components/Services";
import { Products } from "@/features/home/components/Products";
import { Machinery } from "@/features/home/components/Machinery";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ContactSection } from "@/features/home/components/ContactSection";
import { TechnicalService } from "@/features/home/components/TechnicalService";


export default function Home () {
    return (
        <>
            <Hero />
            <Working />
            <AboutSection />
            <Services />
            <Machinery />
            <TechnicalService />
            <Products />
            <ContactSection />
        </>
    )
}