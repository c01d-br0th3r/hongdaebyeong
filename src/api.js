import axios from "axios";

export const getImages = () => {
  return axios.get(
    "https://api.unsplash.com/photos/random/?client_id=AZSv8PSip6iav_fTJ0CW6f3rh4Lq-k00DB4epa1G0vs&count=50"
  );
};
