import axios from "axios";

export const getImages = () => {
  return axios.get(
    "https://api.unsplash.com/photos/random/?client_id=ngv7M7oeWv3lizA-fDA7a5Uov5NxTgkhyard5nyTJYo&count=50"
  );
};
