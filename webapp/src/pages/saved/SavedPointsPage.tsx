import { useSession } from "@inrupt/solid-ui-react";
import { findAllSavePoints } from "../../api/save.point.api";
import AccountLayout from "../../layouts/AccountLayout";
import "../../public/css/pages/saved/SavedPointsPage.scss";
import { useEffect } from "react";
import { useAllSavedPointsStore } from "../../store/point.store";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";

function SavedPointsPage() {
  const { session } = useSession();
  const { setSavedPoints, savedPoints } = useAllSavedPointsStore();

  const loadAllSavedPointsByCurrentUser = async () => {
    const allSavedPoints = await findAllSavePoints(session.info.webId as string);
    setSavedPoints(allSavedPoints);
  };

  useEffect(() => {
    loadAllSavedPointsByCurrentUser();
  }, []);

  return (
    <AccountLayout hasBanner={false}>
      <section className="saved-points-container">
        <h2>Puntos guardados</h2>
        <section className="saved-points-container-listing">
          {savedPoints?.length > 0 ? (
            savedPoints.map((point) => (
              <PointSummaryWithMap
                key={point._id}
                name={point.name}
                address={point.location.address}
                lat={point.location?.coords.lat || 0}
                lng={point.location?.coords.lng || 0}
                hasMap={true}
                pointInfo={point}
              />
            ))
          ) : (
            <p>No tienes puntos guardados</p>
          )}
        </section>
      </section>
    </AccountLayout>
  );
}

export default SavedPointsPage;
