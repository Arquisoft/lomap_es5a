import React from "react";
import "../../public/css/components/menus/nav/AccountNavMenu.scss";
import { menuItems } from "../../helpers/MenuHelper";
import IconMenuItem from "./IconMenuItem";

function AccountNavMenu() {
  return (
    <div className="account-nav-menu-container">
      <ul>
        {menuItems
          .filter((item) => item.parent === "account" && item.muiName)
          .map((menuItem) => (
            <IconMenuItem
              key={menuItem.alias}
              name={menuItem.name}
              iconName={menuItem.muiName}
              url={menuItem.url}
            />
          ))}
      </ul>
    </div>
  );
}

export default AccountNavMenu;
