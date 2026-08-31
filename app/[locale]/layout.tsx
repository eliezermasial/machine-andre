import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layouts/Footer";
import { Hedear } from "@/components/layouts/Hedear";
import { PreHedear } from "@/components/layouts/PreHedear";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "maquinaria | andrés",
  description: "vent de services agricols",
};


export default async function LocaleLayout({
    children}: {children: React.ReactNode
})
{
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
                <PreHedear />
                <Hedear />
                <main>
                    {children}
                    <a
                        href="https://wa.me/243820083703"
                        target="_bank"
                        rel="noopener noreferrer"
                        className="fixed bottom-5 scale-105 md:scale-100 inline-flex items-center text-base xs:text-sm
                            md:text-base justify-center bg-green-500 font-sans p-2.5 md:px-4 md:py-2 z-50 right-5 md:right-15
                        text-center text-white rounded-full hover:scale-105 transition-all shadow font-semibold"
                    >
                        <WhatsAppIcon className="text-white" />
                        <span className="hidden md:inline-block">Whatsapp</span>
                    </a>
                </main>
                <Footer />
            </div>
        </NextIntlClientProvider>
    )
}