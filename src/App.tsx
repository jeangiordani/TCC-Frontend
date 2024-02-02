import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RobotoThin from "./assets/fonts/Roboto/Roboto-Thin.ttf";
import RobotoRegular from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "./assets/fonts/Roboto/Roboto-Bold.ttf";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import MockExams from "./pages/MockExams";
import Profile from "./pages/Profile";

const GlobalStyle = createGlobalStyle`
   *,
  *::after,
  *::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow-x:hidden;
    scrollbar-width: thin;
  scrollbar-color: #A1A1A1 #EBEBEB;
  }

  html, body { height: 100%; width: 100%; margin: 0; }


  *::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
*::-webkit-scrollbar-track {
  border-radius: 7px;
  background-color: #EBEBEB;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #A1A1A1;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #4F4F4F;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #4F4F4F;
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
    --primary-filter: invert(14%) sepia(57%) saturate(3117%) hue-rotate(211deg)
            brightness(95%) contrast(94%);
    --secondary: #D6D6F6;
    --modal: rgba(15,47,129, 0.25);
    --green: #0F811A;
    --green-filter:  invert(37%) sepia(29%) saturate(1908%) hue-rotate(83deg) brightness(93%) contrast(93%);
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Register />} />
                    <Route path="/simulados" element={<MockExams />} />
                    <Route path="/perfil" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
