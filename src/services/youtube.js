import axios from "axios";
// https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&key=AIzaSyCSp3EdnXo4IDCaTPZtpjwImqOgCRQwqzs

const baseUrl = "https://www.googleapis.com/youtube/v3";
const key = process.env.REACT_APP_YT_API_KEY;

async function fetchAllVideos() {
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

export default fetchAllVideos;
