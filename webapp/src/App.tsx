import { Route, Routes } from "react-router";
import AboutPage from "./pages/about/AboutPage";
import UserAccountPage from "./pages/account/UserAccountPage";
import Error404Page from "./pages/error/Error404Page";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import AllPointsPage from "./pages/point/AllPointsPage";
import SinglePointDetailsPage from "./pages/point/SinglePointDetailsPage";
import SavedPointsPage from "./pages/saved/SavedPointsPage";
import CreatePointPage from "./pages/point/CreatePointPage";
import { ABOUT_PATH, ACCOUNT_PATH, GENERAL_POINT_PATH, HOME_PATH, LOGIN_PATH, SAVED_POINTS_PATH, SINGLE_POINT_PATH,CREATE_POINT_PATH, FAQ_PATH } from "./routes";
import FaqPage from "./pages/faq/FaqPage";
import { SessionProvider} from "@inrupt/solid-ui-react";
import { handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";
import { useEffect } from "react";



function App() {

  // useEffect(() => {
  //   // 2. When loading the component, call `handleIncomingRedirect` to authenticate
  //   //    the user if appropriate, or to restore a previous session.
  //   handleIncomingRedirect({
  //     restorePreviousSession: true
  //   }).then((info) => {
  //     console.log(`Logged in with WebID [${info?.webId}]`)
  //   })
  // }, []);
  return (
    //<SessionProvider sessionId="prueba-login">      
        <Routes>
          <Route path={LOGIN_PATH} element={<LoginPage />} />
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={GENERAL_POINT_PATH}>
            <Route index element={<AllPointsPage />} />
            <Route path={SINGLE_POINT_PATH} element={<SinglePointDetailsPage />}/>
          </Route>
          <Route path={SAVED_POINTS_PATH} element={<SavedPointsPage />} />
          <Route path={ABOUT_PATH} element={<AboutPage />} />
          <Route path={ACCOUNT_PATH} element={<UserAccountPage />} />
          <Route path={CREATE_POINT_PATH} element={<CreatePointPage />} />
          <Route path={FAQ_PATH} element={<FaqPage />} />
          {/* Redireccion a 404 en otro caso */}
          <Route path="*" element={<Error404Page />} />
        </Routes>
    //</SessionProvider>


  );
}

export default App;
