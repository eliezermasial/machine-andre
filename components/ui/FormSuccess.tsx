import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export function FormSuccess () {
    const t = useTranslations("ContactSection")
    return (
        <div className="bg-white rounded-xl md:p-8 gap-5 p-5">
            <div className="bg-gray-200/55 border border-primary/15 rounded-xl p-8 gap-2
                flex flex-col items-center"
            >
                <div className="bg-onPrimary p-3 rounded-full">
                    <Check size={20} className="text-white" />
                </div>
                <h3 className="text-xl max-md:text-center font-sans text-primary font-bold leading-[1.15]">
                    {t("message-title")}
                </h3>
                <span className="text-center font-medium text-sm text-black/75">
                    {t("soubmited-message")}
                </span>
            </div>
        </div>
    )
}