import { useSession } from "@inrupt/solid-ui-react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import UserAccountPage from "./pages/account/UserAccountPage";
import Error404Page from "./pages/error/Error404Page";
import FaqPage from "./pages/faq/FaqPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import CreatePointPage from "./pages/point/CreatePointPage";
import SinglePointDetailsPage from "./pages/point/SinglePointDetailsPage";
import SavedPointsPage from "./pages/saved/SavedPointsPage";
import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  CREATE_POINT_PATH,
  FAQ_PATH,
  GENERAL_POINT_PATH,
  HOME_PATH,
  LOGIN_PATH,
  SAVED_POINTS_PATH,
  SINGLE_POINT_PATH,
} from "./routes";

function App() {
  const { session } = useSession();

  const isPageRefresh =
    window.performance &&
    window.performance
      .getEntriesByType("navigation")
      .map((nav: any) => nav.type)
      .includes("reload");

  useEffect(() => {
    sessionStorage.setItem("currentPath", window.location.href);
    const reload = async () => {
      if (isPageRefresh) {
        sessionStorage.setItem("isReload", "true");
        await session.handleIncomingRedirect({
          url: window.location.href
        });
      }else{
        sessionStorage.setItem("isReload", "false");
      }
    };
    reload();
  }, [isPageRefresh]);

  if (!session.info.isLoggedIn) {
    sessionStorage.clear();
    return <LoginPage />;
  }

  return (
    <Routes>
      <Route path={LOGIN_PATH} element={<LoginPage />} />
      <Route path={HOME_PATH} element={<HomePage />} />
      <Route path={GENERAL_POINT_PATH}>
        <Route path={SINGLE_POINT_PATH} element={<SinglePointDetailsPage />} />
      </Route>
      <Route path={SAVED_POINTS_PATH} element={<SavedPointsPage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={ACCOUNT_PATH} element={<UserAccountPage />} />
      <Route path={CREATE_POINT_PATH} element={<CreatePointPage />} />
      <Route path={FAQ_PATH} element={<FaqPage />} />
      {/* Redireccion a 404 en otro caso */}
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
