import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { LogoLink } from ".";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole("heading", { name: "Olá mundo" });
    expect(heading.firstChild).toHaveAttribute("href", "#target");
  });

  it("should render image logo", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText("Olá mundo")).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should render internal link", () => {
    renderTheme(
      <LogoLink link="/target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.getByAltText("Olá mundo")).toHaveAttribute(
      "src",
      "image.jpg",
    );
  });

  it("should render internal link with text only", () => {
    renderTheme(<LogoLink link="/target" text="Olá mundo" />);
    expect(
      screen.getByRole("heading", { name: "Olá mundo" }),
    ).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
