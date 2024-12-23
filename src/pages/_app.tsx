import '@/app/globals.css'
import { Header } from '@/components/header'
import type { AppProps } from 'next/app'
import { Jura } from "next/font/google";


const jura = Jura({
    variable: "--font-jura-sans",
    subsets: ["latin"],
  });
  

export default function MyApp(
    { Component, pageProps }: AppProps
) {
    return (
        <>
                
                <main className={`${jura.variable} font-sans antialiased`}>
                    <Header></Header>
                    <Component {...pageProps} />
                </main>
                
        </>

        )
}
