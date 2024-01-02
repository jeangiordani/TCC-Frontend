import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RobotoThin from "./assets/fonts/Roboto/Roboto-Thin.ttf";
import RobotoRegular from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "./assets/fonts/Roboto/Roboto-Bold.ttf";
import { Home } from "./pages/Home";

const GlobalStyle = createGlobalStyle`
   *,
  *::after,
  *::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  @font-face {
    font-family: "Roboto-Thin";
    src: url(${RobotoThin}) format('truetype');
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: "Roboto-Bold";
    src: url(${RobotoBold}) format('truetype');
  }

  :root {
    --primary: #0F2F81;
    --secondary: #D6D6F6;
    --modal: rgba(15,47,129, 0.25);
    --green: #0F811A;
    --red: #D10000;
  }
`;

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
