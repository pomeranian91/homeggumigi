import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <MainPage />
  </>,
  document.getElementById("root")
);
