import { Container } from "@/components/ui/Container";


export function Hero() {
   

    return (

            <Container className="relative z-10 flex flex-col justify-center h-full max-md:scale-105 gap-5 md:gap-3">
                <div>
                    <span className="inline-flex bg-gold/35 text-gold z-50 rounded-3xl px-2 py-1
                        tracking-[0.12em] text-[11px] uppercase font-bold font-sans translate-none"
                    >
                        quote
                    </span>
                </div>
                <div className="inline-flex flex-col gap-5 md:gap-3 md:max-w-220 ">

                </div>
            </Container>
    )
}