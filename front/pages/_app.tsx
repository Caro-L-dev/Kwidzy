import type { AppProps } from "next/app";
import Container from "@/components/molecules/Container/Container";

import "@/styles/globals.css";
import { Rammetto_One } from "@next/font/google";

// https://nextjs.org/docs/api-reference/next/font
const mainFont = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <main className={mainFont.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  );
}
