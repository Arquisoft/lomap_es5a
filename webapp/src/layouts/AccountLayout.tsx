import React, { useId } from "react";
import AccountAside from "src/components/asides/AccountAside";
import AuthenticatedLayout from "./AutenticatedLayout";

import UserAccountBanner from "src/public/css/components/banners/UserAccountBanner";
import "../public/css/layouts/accountLayout/AccountLayout.scss";

/**
 * @param children: Contenido de la subpágina de la cuenta personal.
 * @param hasBanner: A true para indicar que la vista mostrará la barra de navegación principal.
 */
type Props = {
  children: React.ReactNode;
  hasBanner: boolean;
};

function AccountLayout({ children, hasBanner = false }: Props) {
  return (
    <AuthenticatedLayout hasNav={false} _className="account-layout-container">
      <AccountAside _className="account-layout__aside"/>
      {hasBanner && <UserAccountBanner _className="account-layout__banner"/>}
      <main className="account-layout__body">
        {children}
      </main>
    </AuthenticatedLayout>
  );
}

export default AccountLayout;
