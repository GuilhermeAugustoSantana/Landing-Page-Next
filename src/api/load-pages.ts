import config from "../config";
import { PageData } from "../templates/App";
import { mapData } from "./map-data";

export const loadPages = async (id = ""): Promise<PageData> => {
  const url = !id
    ? `${config.url}/pages/?populate=deep`
    : `${config.url}/pages/${id}/?populate=deep`;
  const raw = await fetch(url);
  const json = await raw.json();
  const data = !id ? mapData(json.data) : mapData([json.data]);

  return data;
};
