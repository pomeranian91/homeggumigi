import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <div>
    <GlobalStyles />
    <MainPage />
  </div>,
  document.getElementById("root")
);
