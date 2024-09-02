/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from "../components/MenuLink";
import { PageData } from "../templates/App";

export const mapMenu = (menu = {} as any): PageData["menu"] => {
  const {
    logo_text: text = "",
    logo_link: link = "",
    logo: { data = "" } = "",
    menu_links: links = [],
  } = menu;
  const srcImg = data && data.attributes.url ? data.attributes.url : "";

  return {
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map((item): MenuLinkProps => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = "",
      url: link = "",
    } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
