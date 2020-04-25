const images = (state = { loading: true, images: [], error: null }, action) => {
  switch (action.type) {
    case "SUCCESS_FETCH_IMAGES":
      return {
        ...state,
        loading: false,
        images: [...state.images, ...action.images],
      };
    case "FAIL_FETCH_IMAGES":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default images;
