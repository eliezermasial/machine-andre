import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";


export function Contact () {
    return (
        <Section className="bg-white max-md:px-3">
            <Container>
                <div className="flex max-md:flex-col gap-5 justify-between md:items-center
                    bg-primary p-10 md:py-15 rounded-xl max-md:scale-105"
                >
                    <div>
                        <h2 className="text-3xl mb-2 md:text-5xl leading-tight text-white font-sans font-bold">
                            Coordonnées et localisation
                        </h2>
                        <span>
                            Nous sommes là pour vous aider. Appelez-nous, écrivez-nous ou venez nous voir.
                        </span>
                    </div>
                    <div>
                        <Button className="inline-flex gap-2 max-md:w-full bg-primary transition-all delay-100
                        hover:bg-white hover:text-primary border-2 border-white">
                            <span>Contact</span>
                            <span>→</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}