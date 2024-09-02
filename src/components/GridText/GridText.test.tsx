import { renderTheme } from "../../styles/render-theme";
import { GridText } from ".";

import mock from "./mock";

describe("<GridText />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
