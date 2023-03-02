import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import { HOME_PATH, LOGIN_PATH } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={LOGIN_PATH} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
