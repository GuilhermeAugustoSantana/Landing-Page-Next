import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from ".";
import mock from "./mock";

describe("<NavLinks />", () => {
  it("should render", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  // it('should not render links', () => {
  //   renderTheme(<NavLinks links={mock} />);
  //   expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
  //     'flex-flow',
  //     'column wrap',
  //     {
  //       media: theme.media.lteMedium,
  //     },
  //   );
  // });

  it("should snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
