import linksMock from "../../components/NavLinks/mock";

import gridMock from "../../components/GridText/mock";
import { GridText } from "../../components/GridText";
import { BaseProps } from ".";

export default {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>Teste de footer</p>",
} as BaseProps;
