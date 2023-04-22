import React from "react";
import { useSession } from "@inrupt/solid-ui-react";
import "../../../public/css/components/asides/accountAside/TopAccountAside.css";
import TopAsideButton from "./topAccountAside/TopAsideButton";
import { ArrowBackIosIcon } from "../../../helpers/IconContants";

import { useNavigate } from "react-router-dom";
import { ACCOUNT_MENU_ITEMS } from "../../../helpers/MenuHelper";
import { BASE_PATH, LOGIN_PATH } from "../../../routes";

function TopAccountAside() {
  const { session } = useSession();
  const navigate = useNavigate();

  const handleLogout = async (e: any) => {
    e.preventDefault();
    sessionStorage.clear();
    await session.logout().then(() => {
      window.location.href = `${BASE_PATH}${LOGIN_PATH}`;
    });
  };

  const handleNavigate = async (
    e: React.MouseEvent<HTMLElement>,
    path: string
  ) => {
    e.preventDefault();
    if (path.includes("logout")) {
      await handleLogout(e);
      return;
    }
    navigate(path);
  };

  const handleGoToThePreviousPage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    
    <div className="top-acc-aside-main" >
      <button className="top-acc-aside-back" onClick={(e) => handleGoToThePreviousPage(e)} role="back">
        <ArrowBackIosIcon aria-hidden="true"/>
      </button>
      <div className="top-acc-aside-title">Mi cuenta</div>
      <div className="top-acc-aside-buttons">
        {ACCOUNT_MENU_ITEMS.map((item) => {
          return (     
            <TopAsideButton
              key={item.alias}
              icon={item.muiName}
              text={item.name}
              isActive={item.url === window.location.pathname}
              onClick={(e) => handleNavigate(e, item.url ?? "#")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopAccountAside;
