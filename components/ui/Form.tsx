import { ReactNode } from "react";
import { useTranslations } from "next-intl";


type FormProps = {
    handleSubmited: (e: React.SubmitEvent<HTMLFormElement>) => void ;
    isSubmited: boolean,
    isSubmiting: boolean,
    children: ReactNode
};

export function Form ({children,handleSubmited, isSubmiting}: FormProps) {
    const t = useTranslations("ContactSection");
    
    return (
        <form onSubmit={handleSubmited} className="flex flex-col md:px-10 text-onPrimary/85
            font-bold font-sans text-sm bg-white capitalize rounded-xl gap-5 md:py-10 p-5"
        >
            {children}
            <div className="inline-flex items-center">
                <button type="submit" className="max-md:w-full bg-onPrimary xs:text-sm px-6
                    font-sans py-3 text-center text-white/85 rounded-xl hover:bg-primary
                    transition-all font-semibold text-xs md:text-base"
                >
                    {isSubmiting ? "..." : t("btn-submit")} 
                </button>
            </div>
        </form>
    )
}