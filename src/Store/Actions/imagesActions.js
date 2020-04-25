const fetchImages = () => {
  return {
    type: "FETCH_IMAGES",
  };
};

const successFetchImages = (images) => {
  return {
    type: "SUCCESS_FETCH_IMAGES",
    images,
  };
};

const failFetchImages = (error) => {
  return {
    type: "FAIL_FETCH_IMAGES",
    error,
  };
};

export default { fetchImages, successFetchImages, failFetchImages };
