import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer footerHtml={"<h1>Ola</h1>"} />);
    expect(screen.getByRole("heading", { name: "Ola" })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
