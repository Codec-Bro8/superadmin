import { fetchApiData } from "./request";

const fetchData = async () => {
  const responseData = await fetchApiData("/user/getChurches");
  return responseData.data;
};

const fetchChurchVideos = async () => {
  const responseData = await fetchApiData("/videos/churchVideos/43?live=0");
  return responseData.data;
};

const fetchVideos = async () => {
  const responseData = await fetchApiData("/videos?live=1");
  return responseData.data;
};

const fetchAudio = async () => {
  const responseData = await fetchApiData("/audio/getChurchAudio");
  return responseData.data;
};

const fetchBlog = async () => {
  const responseData = await fetchApiData("/blog?churchId=26");
  return responseData.data;
};

const fetchDevotional = async () => {
  const responseData = await fetchApiData("/devotional?churchId=26");
  return responseData.data;
};

export {
  fetchAudio,
  fetchBlog,
  fetchChurchVideos,
  fetchDevotional,
  fetchVideos,
  fetchData,
};
