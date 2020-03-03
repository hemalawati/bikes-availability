import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

const theme = {
  centerTextAlign: "center",
  containerBorder: "#E0E0E0",
  contentBackground: "#E7E7E7",
  boxShadow: "#AAAAAA",
  headerBackground: "#0076A8",
  highAvailability: "#388697",
  hoverBackground: "#678678",
  lowAvailability: " #CC2936",
  selectedBackground: "#F26522",
  sideBarBackground: "#2C3F50",
  subContentBackground: "#FFFFFF",
  text: "#333333"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
