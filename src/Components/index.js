import React, { useEffect } from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "./theme";
import allActions from "../Store/Actions";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const lsTheme = window.localStorage.getItem("theme");
    if (lsTheme) {
      if (lsTheme === "light") dispatch(allActions.themeActions.changeLight());
      else dispatch(allActions.themeActions.changeDark());
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
