import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MenuLink } from ".";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br/">children</MenuLink>,
    );
    expect(screen.getByRole("link", { name: "children" })).toHaveAttribute(
      "target",
      "_self",
    );
  });

  it("should render a internal link", () => {
    renderTheme(<MenuLink link="/">children</MenuLink>);
    expect(screen.getByRole("link", { name: "children" }));
  });

  it("should render open a new tab", () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br/" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole("link", { name: "children" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });

  it("should render open a new tab", () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br/" newTab={false}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole("link", { name: "children" })).toMatchSnapshot();
  });
});
