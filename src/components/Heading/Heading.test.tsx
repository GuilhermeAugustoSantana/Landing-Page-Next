import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should rennder with default values", () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.fonts.sizes.xxlarge,
      "text-transform": "none",
    });
  });

  it("should rennder with white values", () => {
    renderTheme(<Heading colordark={false}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should rennder correct heading size small", () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.fonts.sizes.small,
    });
  });

  it("should rennder correct heading size medium", () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.fonts.sizes.large,
    });
  });

  it("should rennder correct heading size large", () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.fonts.sizes.xlarge,
    });
  });

  // it('should render correct font-size less than 768px', () => {
  //   renderTheme(<Heading size="huge">Lorem ipsum</Heading>);

  //   const heading = screen.getByRole('heading', { name: 'Lorem ipsum' })
  //   expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge,
  //     { media: theme.media.lteMedium, });
  // });

  it("should rennder with uppercase letters", () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should rennder correct heading element", () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    screen.getByRole("heading", { name: "texto" });
    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
  });
});
