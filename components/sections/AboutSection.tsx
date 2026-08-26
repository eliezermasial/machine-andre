import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useTranslations } from "next-intl";
import { Counter } from "../animations/Counter";
import {advantages, images} from "@/lib/constants"


export function AboutSection() {

    const t = useTranslations("About-us");

    return (
        <Section className="bg-white text-black max-md:px-3">
            <Container className="">
                <div className="grid grid-cols-1 gap-25 pt-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <div className="relative scale-107 border-3 border-gold/40 rounded-2xl p-3 pr-0">
                        <div className="rounded-3xl z-10 zoom-120 bg-white shadow-2xl p-3 pt-1">
                            <div className="grid grid-cols-4 grid-rows-3 gap-1">
                                {images.map((image, index) => (
                                    <div key={image.src}
                                        className={cn("relative overflow-hidden rounded-md",
                                            "min-h-22.5 sm:min-h-30 ",
                                            image.className
                                        )}
                                    >
                                        <Image src={image.src} alt={image.alt} fill priority={index === 0}
                                            className="object-cover transition-transform duration-500 hover:scale-115"
                                            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 12vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-8 left-0 z-20 flex items-center gap-4 px-5 py-4
                            bg-primary shadow-lg sm:px-6 sm:py-5 rounded-2xl"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center 
                                border border-gold/40 bg-gold/10 sm:h-16 sm:w-16 rounded-xl"
                            >
                                <Counter target={40} className="text-2xl font-bold text-gold sm:text-3xl" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                                    {t("WHO-WE-ARE")}
                                </span>
                                <span className="mt-1 block whitespace-nowrap text-sm font-bold text-white sm:text-base">
                                    {t("Yearsexperience")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:pl-10">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-onPrimary">
                                {t("WHO-WE-ARE")} ?
                            </span>
                        </div>
                        <h2 className="text-4xl my-5 md:text-6xl font-sans font-bold leading-[1.05] text-primary">
                            {t("title")}
                            <br />
                            <span className="text-onPrimary">{t("sous-title")} </span>
                        </h2>
                        <p className="mt-7 max-w-xl text-md font-medium leading-7
                            text-text font-semidbold sm:text-lg sm:leading-8"
                        >
                            {t("description")}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 ">
                            {advantages.map((advantage, index) => (
                                <div key={advantage}
                                    className="flex min-h-18 items-center gap-4 rounded-xl border border-primary/10
                                        bg-cmyk/40 px-4 py-3 transition-all duration-100 
                                        hover:border-gold/50 hover:bg-white hover:shadow-xl hover:shadow-cmyk/65
                                    "
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold
                                        rounded-lg bg-onPrimary font-sans transition-all duration-100 text-white
                                        hover:bg-gold hover:text-primary text-[15px] shadow-sm"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <span dir="auto" className="font-bold align-inherit leading-5
                                        xs:text-sm sm:text-base text-primary"
                                    >
                                        {t(advantage)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex gap-2">
                            <Button className="rounded-lg text-sm md:text-base bg-onPrimary px-3 py-3 font-bold
                                transition-colors whitespace-nowrap hover:bg-primary text-white"
                            >
                                {t("About")}
                            </Button>

                            <Button className="rounded-lg bg-transparent border-none border-primary px-1 py-1 font-bold
                                text-onPrimary text-sm md:text-base shadow-none transition-colors
                                hover:bg-transparent hover:underline"
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}