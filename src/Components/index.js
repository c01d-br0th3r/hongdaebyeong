import React from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const theme = useSelector((state) => state.theme);
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
