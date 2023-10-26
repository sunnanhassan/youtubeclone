import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "beab558f4bmshecd494692b91237p1807f4jsnef67f1e943c8",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
