import { Route, Routes } from "react-router";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import { ABOUT_PATH, HOME_PATH, LOGIN_PATH } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={LOGIN_PATH} element={<LoginPage />} />
        <Route path={ABOUT_PATH} element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
