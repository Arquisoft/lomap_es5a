import { useSession } from "@inrupt/solid-ui-react";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";
import AccountLayout from "../../layouts/AccountLayout";
import { HOME_PATH } from "../../routes";
import "../../public/css/pages/account/UserAccountPage.scss";
import { useAllPointsStore } from "../../store/point.store";
import { generateUUID } from "../../utils/stringUtils";
import { useEffect } from "react";
import { findAllUserPoints } from "../../api/point.api";
import { Point } from "../../shared/shareddtypes";
import { deletePoint } from "../../api/point.api";
import { deleteSharedPointForFriend } from "../../api/share.point.api";
import { useNavigate } from "react-router-dom";

function UserAccountPage() {
  const { session } = useSession();
  const { setUserPoints, getUserPoints } = useAllPointsStore();
  const navigate = useNavigate();

  const loadUserPoints = async () => {
    const data: Point[] = await findAllUserPoints(session.info.webId as string);
    console.log("data", data);
    setUserPoints(data);
  };

  useEffect(() => {
    loadUserPoints();
  }, []);

  const handleDeletePoint = async (e: React.MouseEvent<HTMLElement>, pointToShow:Point) => {
    //Comprobamos si somos el Owner
    if(pointToShow.isOwner == true){
      const webId = pointToShow.owner.webId;
      const idPoint = pointToShow._id;
      //Eliminamos el punto nuestro
      await deletePoint(idPoint,webId);
      //Eliminamos el punto con los amigos
      pointToShow.friends.forEach( e => deleteSharedPointForFriend(session,e.webId,idPoint)); 
      //Vamos a la vista Home
      navigate(HOME_PATH);
    }
    return;
  };

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
                    onClick={(e) => handleDeletePoint(e ,point)}
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
