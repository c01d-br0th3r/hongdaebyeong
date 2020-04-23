const changeLight = () => {
  return {
    type: "CHANGE_LIGHT",
  };
};

const changeDark = () => {
  return {
    type: "CHANGE_DARK",
  };
};

export default { changeLight, changeDark };
