/**
 * Package Import
 */
import type { AppProps } from "next/app";

/**
 * Local Import
 */
import { Container } from "@/src/components/molecules";

/**
 * Styles
 */
import "@/styles/globals.css";
import { Rammetto_One } from "@next/font/google";

// https://nextjs.org/docs/api-reference/next/font
const mainFont = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
});

/**
 * Component
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <main className={mainFont.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  );
}
