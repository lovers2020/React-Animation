import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const GlobalStyle = createGlobalStyle`
${reset}
    body {
    font-weight: 300;
    font-family: sans-serif; 
    color:black;
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
reportWebVitals();
