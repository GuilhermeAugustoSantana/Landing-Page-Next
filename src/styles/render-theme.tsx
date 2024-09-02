import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { render } from "@testing-library/react";

export const renderTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}> {children} </ThemeProvider>);
};
