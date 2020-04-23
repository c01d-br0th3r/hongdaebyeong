import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";

const Main = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (theme === "light") {
      dispatch(allActions.themeActions.changeDark());
      window.localStorage.setItem("theme", "dark");
    } else {
      dispatch(allActions.themeActions.changeLight());
      window.localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme == "light")
        dispatch(allActions.themeActions.changeLight());
      else dispatch(allActions.themeActions.changeDark());
    }
  }, []);
  console.log(theme);
  return (
    <div>
      <h1>This is Main Page.</h1>
      <button onClick={handleClick}>Change Mode</button>
    </div>
  );
};

export default Main;
