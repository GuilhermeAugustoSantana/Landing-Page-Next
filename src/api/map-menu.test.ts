import { mapMenu, mapMenuLinks } from "./map-menu";

describe("map-menu", () => {
  it("shuld return a predefined if no data", () => {
    const menu = mapMenu();
    expect(menu.links).toEqual([]);
    expect(menu.text).toBe("");
    expect(menu.srcImg).toBe("");
    expect(menu.link).toBe("");
  });

  it("shuld map menu to match keys and values required", () => {
    const menu = mapMenu({
      logo_link: "#home",
      logo_text: "Logo",
      logo: {
        data: {
          attributes: {
            name: "logo.png",
            alternativeText: "",
            url: "a.svg",
          },
        },
      },
      menu_links: [
        {
          link_text: "intro",
          url: "#intro",
          open_in_new_tab: false,
        },
        {
          link_text: "grid-one",
          url: "#grid-one",
          open_in_new_tab: false,
        },
        {
          link_text: "gallery",
          url: "#gallery",
          open_in_new_tab: false,
        },
        {
          link_text: "grid-two",
          url: "#grid-two",
          open_in_new_tab: false,
        },
        {
          link_text: "externo",
          url: "https://www.google.com",
          open_in_new_tab: true,
        },
      ],
    });
    expect(menu.text).toBe("Logo");
    expect(menu.srcImg).toBe("a.svg");
    expect(menu.link).toBe("#home");
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe("intro");
    expect(menu.links[0].link).toBe("#intro");
  });

  it("shuld return an empty array if no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it("shuld map links if links passed", () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: "pricing",
        url: "#pricing",
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe("pricing");
    expect(links[0].link).toBe("#pricing");
  });
});
