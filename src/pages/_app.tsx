import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia-sans",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={`${sofiaSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
