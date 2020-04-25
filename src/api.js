import axios from "axios";

export const getImages = () => {
  return axios.get(
    "https://api.unsplash.com/photos/random/?client_id=7dH5s8G3P-WBuyH9zudbIoikrvD8AUGIagkl6Dvws7E&count=50"
  );
};
