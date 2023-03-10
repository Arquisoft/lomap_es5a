import PointSummaryWithMap from "src/components/points/PointSummaryWithMap";
import AccountLayout from "src/layouts/AccountLayout";

import "../../public/css/pages/account/UserAccountPage.scss";

function UserAccountPage({ ...props }) {
  return (
    <AccountLayout hasBanner={true}>
      <div className="user-account-container">
        <section className="user-account-container__body">
          {/* Listado de puntos creados por el usuario */}
          <h2>Mis puntos</h2>
          <div className="user-account-container-body__gallery">
            <PointSummaryWithMap
              name="Mi punto"
              address="Mi direccion"
              lat={42.879772071131484}
              lng={-5.3187352790487665}
              hasMap={true}
            />

            <PointSummaryWithMap
              name="Mi punto 2"
              address="Mi direccion 2"
              lat={43.36909846832553}
              lng={-5.874016514345141}
              hasMap={true}
            />

            <PointSummaryWithMap
              name="Mi punto 3"
              address="Mi direccion 3"
              lat={43.30320504838327}
              lng={-5.6936649010505525}
              hasMap={true}
            />

            <PointSummaryWithMap
              name="Mi punto 4"
              address="Mi direccion 4"
              lat={43.3304328730839}
              lng={-4.824155236177411}
              hasMap={true}
            />
          </div>
        </section>
      </div>
    </AccountLayout>
  );
}

export default UserAccountPage;
