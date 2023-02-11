import axios from "axios";

const baseUrl = "https://www.googleapis.com/youtube/v3";
const key = process.env.REACT_APP_YT_API_KEY;

async function fetchAll() {
  const part = `part=${["id", "snippet"].join("&part=")}`;
  const chart = "chart=mostPopular";
  const maxResults = "maxResults=12";
  const params = [part, chart, maxResults, `key=${key}`].join("&");

  try {
    return await axios.get(`${baseUrl}/videos?${params}`);
  } catch (error) {
    throw new Error(error);
  }
}

async function search(keyword) {
  const part = `part=${["id", "snippet"].join("&part=")}`;
  const maxResults = "maxResults=12";
  const type = "type=video";
  const params = [part, maxResults, type, `key=${key}`].join("&");

  try {
    return await axios.get(`${baseUrl}/search?q=${keyword}&${params}`);
  } catch (error) {
    throw new Error(error);
  }
}

export { fetchAll, search };
