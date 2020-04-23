import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";

const Main = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (theme === "light") {
      dispatch(allActions.themeActions.changeDark());
    } else {
      dispatch(allActions.themeActions.changeLight());
    }
  };
  console.log(theme);
  return (
    <div>
      <h1>This is Main Page.</h1>
      <button onClick={handleClick}>Change Mode</button>
    </div>
  );
};

export default Main;
