import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from "./map-sections";

import { dados } from "./dados.js";

describe("map-sections", () => {
  it("should render predefined sections if no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it("should render sections with correct data", () => {
    const data = mapSections(dados[0].attributes.sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });

  it("should test section.section-grid with no image_grid", () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: "section.section-grid",
        image_grid: [],
      },
      {
        __component: "section.section-grid",
        text_grid: [],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it("should test sections with invalid data", () => {
    const withNoTextOrImageGrid = mapSections([
      { __component: "section.section-grid" },
    ]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: "section.section-grid" },
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoComponent).toEqual([{}]);
  });

  it("should map section two columns with no data", () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe("");
    expect(data.title).toBe("");
    expect(data.text).toBe("");
    expect(data.srcImg).toBe("");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("");
  });

  it("should map section two columns with data", () => {
    const data = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "January brings us Firefox 85",
      description: "To wrap up January, ",
      metadata: {
        background: true,
        section_id: "home",
      },

      image: {
        data: {
          attributes: {
            url: "img.svg",
          },
        },
      },
    });
    expect(data.component).toBe("section.section-two-columns");
    expect(data.title).toBe("January brings us Firefox 85");
    expect(data.text).toBe("To wrap up January, ");
    expect(data.srcImg).toBe("img.svg");
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe("home");
  });

  it("should map section content with no data", () => {
    const data = mapSectionContent();
    expect(data.component).toBe("");
    expect(data.title).toBe("");
    expect(data.html).toBe("");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("");
  });

  it("should map section content with data", () => {
    const data = mapSectionContent({
      __component: "section.section-content",
      title: "news coverage and some surprises",
      content: "<p>The release of Apple Silicon-based Macs</p>",
      metadata: {
        background: false,
        section_id: "intro",
      },
    });
    expect(data.component).toBe("section.section-content");
    expect(data.title).toBe("news coverage and some surprises");
    expect(data.html).toBe("<p>The release of Apple Silicon-based Macs</p>");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("intro");
  });

  it("should map section grid text with no data", () => {
    const data = mapTextGrid();
    expect(data.component).toBe("section.section-grid-text");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("");
  });

  it("should map section grid text with data", () => {
    const data = mapTextGrid({
      __component: "section.section-grid-text",
      description:
        "Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut",
      title: "My Grid",
      text_grid: [
        {
          title: "Teste 1",
          description: "abc",
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: "grid-one",
      },
    });
    expect(data.component).toBe("section.section-grid-text");
    expect(data.title).toBe("My Grid");
    expect(data.description).toBe(
      "Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut",
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe("grid-one");
    expect(data.grid[0].title).toBe("Teste 1");
    expect(data.grid[0].description).toBe("abc");
  });

  it("should map section grid image with no data", () => {
    const data = mapImageGrid();
    expect(data.component).toBe("section.section-grid-image");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("");
  });

  it("should map section grid image with data", () => {
    const data = mapImageGrid({
      __component: "section.section-grid-Image",
      description: "Abc.",
      title: "Gallery",
      text_grid: [],
      image_grid: [
        {
          image: {
            data: {
              attributes: {
                alternativeText:
                  "Uma paisagem com céu claro e montanhas bonitas",
                url: "a.svg",
              },
            },
          },
        },
      ],
      metadata: {
        background: false,
        section_id: "gallery",
      },
    });
    expect(data.component).toBe("section.section-grid-image");
    expect(data.title).toBe("Gallery");
    expect(data.description).toBe("Abc.");
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe("gallery");
    expect(data.grid[0].srcImg).toBe("a.svg");
    expect(data.grid[0].altText).toBe(
      "Uma paisagem com céu claro e montanhas bonitas",
    );
  });
});
