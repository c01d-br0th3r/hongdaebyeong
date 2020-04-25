import axios from "axios";

export const getImages = () => {
  return axios.get(
    "https://api.unsplash.com/photos/random/?client_id=VxNmofr-6FIbpK-Pdm417wXsZsqcOFfEs9psRzIcZ3g&count=5"
  );
};
