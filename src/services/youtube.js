import axios from "axios";

const baseUrl = "https://www.googleapis.com/youtube/v3";
const key = process.env.REACT_APP_YT_API_KEY;

async function fetchAll() {
  const part = `part=${["id", "snippet"].join("&part=")}`;
  const chart = "chart=mostPopular";
  const embeded = "videoEmbeddable=true";
  const maxResults = "maxResults=13";
  const params = [part, chart, embeded, maxResults, `key=${key}`].join("&");

  try {
    return await axios.get(`${baseUrl}/videos?${params}`);
  } catch (error) {
    throw new Error(error);
  }
}

async function search(keyword) {
  const part = `part=${["id", "snippet"].join("&part=")}`;
  const maxResults = "maxResults=13";
  const type = "type=video";
  const embeded = "videoEmbeddable=true";
  const params = [part, maxResults, type, embeded, `key=${key}`].join("&");

  try {
    return await axios.get(`${baseUrl}/search?q=${keyword}&${params}`);
  } catch (error) {
    throw new Error(error);
  }
}

export { fetchAll, search };
