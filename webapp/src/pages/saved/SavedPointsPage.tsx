import { useSession } from "@inrupt/solid-ui-react";
import { findAllSavePoints } from "../../api/save.point.api";
import AccountLayout from "../../layouts/AccountLayout";
import "../../public/css/pages/saved/SavedPointsPage.scss";
import { useEffect } from "react";
import { useAllSavedPointsStore } from "../../store/point.store";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";
import { Point } from "../../shared/shareddtypes";
import { unsavePoint } from "../../api/save.point.api";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../routes";

function SavedPointsPage() {
  const { session } = useSession();
  const { setSavedPoints, savedPoints } = useAllSavedPointsStore();
  const navigate = useNavigate();

  const loadAllSavedPointsByCurrentUser = async () => {
    const allSavedPoints = await findAllSavePoints(session.info.webId as string);
    setSavedPoints(allSavedPoints);
  };

  useEffect(() => {
    loadAllSavedPointsByCurrentUser();
  }, []);

  const handleDeleteSavedPoint = (
    e: React.MouseEvent<HTMLElement>,
    pointInfo : Point,
    ) => {
      e.preventDefault();
      let idPoint = '';
      let webId = '';
      if(pointInfo?._id){
        idPoint = pointInfo?._id;
      }
      if(session.info.webId){
        webId = session.info.webId;
      }

      unsavePoint(idPoint,webId);

      navigate(HOME_PATH)
    }

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
                onClick={(e) => handleDeleteSavedPoint(e ,point)}
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
