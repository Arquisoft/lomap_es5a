import { useSession } from "@inrupt/solid-ui-react";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";
import AccountLayout from "../../layouts/AccountLayout";

import "../../public/css/pages/account/UserAccountPage.scss";
import { useAllPointsStore } from "../../store/point.store";
import { generateUUID } from "../../utils/stringUtils";
import { useEffect } from "react";
import { findAllUserPoints } from "../../api/point.api";
import { Point } from "../../shared/shareddtypes";

function UserAccountPage() {
  const { session } = useSession();
  const { setUserPoints, getUserPoints } = useAllPointsStore();

  const loadUserPoints = async () => {
    const data: Point[] = await findAllUserPoints(session.info.webId as string);
    console.log("data", data);
    setUserPoints(data);
  };

  useEffect(() => {
    loadUserPoints();
  }, []);

  return (
    <AccountLayout hasBanner={true}>
      <div className="user-account-container">
        <section className="user-account-container__body">
          <h2>Mis puntos</h2>
          <div className="user-account-container-body__gallery">
            {getUserPoints().length > 0 &&
              getUserPoints().map((point) => {
                return (
                  <PointSummaryWithMap
                    key={`point__${generateUUID()}`}
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
