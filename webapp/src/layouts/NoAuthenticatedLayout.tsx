import React from "react";
import "../public/css/layouts/noAuthenticatedLayout/NoAuthenticatedLayout.scss";

type Props = {
  children: React.ReactNode;
};

function NoAuthenticatedLayout({ children }: Props) {
  return (
    <div className="no-authenticated-layout-container"
    >
      {children}
    </div>
  );
}

export default NoAuthenticatedLayout;
