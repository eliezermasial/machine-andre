import { cn } from "@/lib/utils/cn";

type Sectionprops = {
    children: React.ReactNode;
    className?: string
};

export function Section({children, className}: Sectionprops) {
    return (
        <section className={cn(className, "p-10 sm:py-15 lg:py-20")}>
            {children}
        </section>
    )
}