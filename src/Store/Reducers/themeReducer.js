const theme = (state = "light", action) => {
  switch (action.type) {
    case "CHANGE_LIGHT":
      return "light";
    case "CHANGE_DARK":
      return "dark";
    default:
      return state;
  }
};

export default theme;
