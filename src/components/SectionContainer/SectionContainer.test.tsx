import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionContainer } from ".";

describe("<SectionContainer />", () => {
  it("should render", () => {
    renderTheme(<SectionContainer>children</SectionContainer>);
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
