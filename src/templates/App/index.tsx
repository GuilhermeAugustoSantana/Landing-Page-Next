import Head from "next/head";

import { Base } from "../Base";

import {
  GridTwoColumn,
  GridTwoColumnProps,
} from "../../components/GridTwoColumn";
import { GridContent, GridContentProps } from "../../components/GridContent";
import { GridText, GridTextProps } from "../../components/GridText";
import { GridImage, GridImageProps } from "../../components/GridImage";
import config from "../../config";
import { LogoLinkProps } from "../../components/LogoLink";
import { MenuLinkProps } from "../../components/MenuLink";

export type PageData = {
  id: string;
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnProps
  | GridContentProps;

export type HomeProps = {
  data: PageData[];
};

export default function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>{`${title} | ${config.siteName}`}</title>
      </Head>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;
          if (component === "section.section-two-columns") {
            return (
              <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />
            );
          }

          if (component === "section.section-content") {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }

          if (component === "section.section-grid-text") {
            return <GridText key={key} {...(section as GridTextProps)} />;
          }

          if (component === "section.section-grid-image") {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }
        })}
      </Base>
    </>
  );
}
