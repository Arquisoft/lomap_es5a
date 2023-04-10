import { useSession } from "@inrupt/solid-ui-react";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";
import AccountLayout from "../../layouts/AccountLayout";

import "../../public/css/pages/account/UserAccountPage.scss";
import { useAllPointsStore } from "../../store/point.store";

function UserAccountPage() {
  const { session } = useSession();
  const { points } = useAllPointsStore();

  return (
    <AccountLayout hasBanner={true}>
      <div className="user-account-container">
        <section className="user-account-container__body">
          {/* Listado de puntos creados por el usuario */}
          <h2>Mis puntos</h2>
          <div className="user-account-container-body__gallery">
            {points.length > 0 &&
              points
                .filter((point) => point.owner.webId === session.info.webId)
                .map((point) => {
                  return (
                    <PointSummaryWithMap
                      key={point._id}
                      name={point.name}
                      address={point.location.address}
                      lat={point.location?.coords.lat || 0}
                      lng={point.location?.coords.lng || 0}
                      hasMap={true}
                      pointInfo={point}
                    />
                  );
                })}
          </div>
        </section>
      </div>
    </AccountLayout>
  );
}

export default UserAccountPage;
