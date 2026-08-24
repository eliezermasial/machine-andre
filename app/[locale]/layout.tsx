import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layouts/Footer";
import { Hedear } from "@/components/layouts/Hedear";
import { PreHedear } from "@/components/layouts/PreHedear";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAQUINARIA | ANDRÉS",
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
                </main>
                <Footer />
            </div>
        </NextIntlClientProvider>
    )
}