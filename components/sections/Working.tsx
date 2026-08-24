import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { useTranslations } from "next-intl";


export function Working() {

    const t= useTranslations("HomePage");

    return (
        <Section className="bg-cmyk pt-0">
            <Container className="flex flex-col justify-center items-center h-[40vh]">
                <div className="w-full md:w-[70%] scale-105 pt-8 md:pt-5">
                    <h3 className="text-4xl md:text-5xl leading-tight text-center text-primary font-sans font-bold">
                        {t("Working-title")}
                    </h3>
                    <p className="text-text/80 mt-5 text-center text-[18px] md:text-xl font-sans">
                        {t("Working-description")}
                    </p>
                </div>
            </Container>
        </Section>
    )
}