import { Logo } from "../ui/Logo";
import { Section } from "../ui/Section";
import { Link } from "@/i18n/navigation";
import { Container } from "../ui/Container";

export function Footer() {
    return (
        <footer className="bg-primary py-10">
            <Section className="max-md:px-3">
                <Container className="grid gap-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10
                        text-sm font-normal font-sans text-white/75"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="inline-flex items-center gap-3">
                                <Logo className="bg-onPrimary mt-0" />
                                <span className="text-white font-bold uppercase">MAQUINARIA ANDRÉS</span>
                            </div>
                            <span>
                                Plus de 40 ans au service du progrès agricole
                            </span>
                        </div>

                        <div className="grid gap-5">
                            <h3 className="text-gold text-base font-bold">Entreprise</h3>
                            <nav className="flex flex-col gap-3">
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Accueil
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    À propos
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Services
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Contact
                                </Link>
                            </nav>
                        </div>
                        <div className="grid gap-5">
                            <h3 className="text-gold text-base font-bold">Matériel</h3>
                            <nav className="flex flex-col gap-3">
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Tracteurs
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Mini tracteurs
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Motoculteurs
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Tracteurs chenilles
                                </Link>
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    Outillage
                                </Link>
                            </nav>
                        </div>
                        <div className="grid">
                            <h3 className="text-gold text-base font-bold">Contact</h3>
                            <div className="flex flex-col gap-3">
                                <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">
                                    614 651 150
                                </Link>
                                <span>
                                    info@maquinariaandres.es
                                </span>
                                <span>Elche, Alicante</span>
                            </div>
                        </div>
                    </div>

                    <hr className="text-white/25" />

                    <div className="flex max-md:flex-col max-md:gap-5 max-md:scale-90 items-center md:justify-between text-sm ">
                        <span className="text-white/75">© 2026 Maquinaria Andrés</span>
                        <div className="flex justify-between gap-8">
                            <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">Mentions légales</Link>
                            <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">Confidentialité</Link>
                            <Link href={""} className="text-white/75 capitalize transition-all delay-100 hover:text-white/95">Cookies</Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </footer>
    )
}