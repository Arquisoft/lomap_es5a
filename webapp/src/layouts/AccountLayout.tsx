import React from "react";
import AccountAside from "../components/asides/AccountAside";
import UserAccountBanner from "../components/banners/UserAccountBanner";
import AuthenticatedLayout from "./AuthenticatedLayout";
import "../public/css/layouts/accountLayout/AccountLayout.scss";

/**
 * @param children: Contenido de la subpágina de la cuenta personal.
 * @param hasBanner: A true para indicar que la vista mostrará la barra de navegación principal.
 */
type Props = {
  children: React.ReactNode;
  hasBanner: boolean;
  profileImage?: string;
};

function AccountLayout({ children, hasBanner = false }: Props) {
  return (
    <AuthenticatedLayout hasNav={false}>
      <div className="account-layout-container">
        <AccountAside _className="account-layout__aside" />
        <main className="account-layout__body">
          {hasBanner && (
            <UserAccountBanner _className="account-layout__banner" />
          )}
          {children}
        </main>
      </div>
    </AuthenticatedLayout>
  );
}

export default AccountLayout;
