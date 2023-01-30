import "@/styles/globals.css";
import { Sofia_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sofiaSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
