import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
