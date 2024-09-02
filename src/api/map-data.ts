/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageData } from "../templates/App";
import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapData = (pagesData = [{ attributes: {} }] as any) => {
  return pagesData.map((data: any): PageData => {
    const { id = "" } = data;
    const {
      footer_text: footerHtml = "",
      slug = "",
      title = "",
      sections = [],
      menu = {},
    } = data.attributes;
    return {
      id,
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
