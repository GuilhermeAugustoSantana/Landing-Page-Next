import config from "../config";
import { loadPages } from "./load-pages";
import * as mapDataModule from "./map-data";

jest.mock("./map-data", () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe("load-pages", () => {
  beforeEach(() => {
    global.fetch = jest.fn();

    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));

    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({ json: mockJson });

    jest.clearAllMocks();
  });

  it("should call fetch and mapData with correct values", async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      config.url + "/pages/?populate=deep",
    );
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ mapped: 1 });
  });

  it("should call fetch with correct id", async () => {
    await loadPages("testando");
    expect(mockFetch).toHaveBeenCalledWith(
      config.url + "/pages/testando/?populate=deep",
    );
  });
});
