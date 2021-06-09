import axios from "axios";

const KEY = "AIzaSyAKMwv-dx1nigNIiOHINTm3Pgh_FH4LL4A";
const URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
    baseURL: URL,
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY,
        type: "video",
    },
});
