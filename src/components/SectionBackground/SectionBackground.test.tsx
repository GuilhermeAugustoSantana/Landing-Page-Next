import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from ".";

describe("<SectionBackground />", () => {
  it("should render", () => {
    renderTheme(<SectionBackground>children</SectionBackground>);
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
