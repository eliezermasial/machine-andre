import { Hero } from "@/components/sections/Hero";
import { Working } from "@/components/sections/Working";
import { Services } from "@/components/sections/Services";
import { Machinery } from "@/components/sections/Machinery";
import { AboutSection } from "@/components/sections/AboutSection";


export default function Home () {
    return (
        <>
            <Hero />
            <Working />
            <AboutSection />
            <Services />
            <Machinery />
        </>
    )
}