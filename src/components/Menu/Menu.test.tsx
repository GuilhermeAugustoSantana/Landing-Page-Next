import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";
import linksMock from "../NavLinks/mock";
const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("should render Logo and Main Menu Nav", () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main menu" }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should render menu mobile and buttom for open and close the menu", () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText("Open/Close menu");

    expect(button).toHaveStyleRule("display", "none");
    // expect(button).toHaveStyleRule('display', 'flex', {
    //   media: theme.media.lteMedium,
    // });
    // expect(menuContainer).toHaveStyleRule('opacity', '0', {
    //   media: theme.media.lteMedium,
    // });

    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    // fireEvent.click(button);
    // expect(menuContainer).toHaveStyleRule('opacity', '1', {
    //   media: theme.media.lteMedium,
    // });
    // fireEvent.click(menuContainer);
    // expect(menuContainer).toHaveStyleRule('opacity', '0', {
    //   media: theme.media.lteMedium,
    // });
  });

  it("should not render links", () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.queryByRole("navigation", { name: "Main menu" }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
