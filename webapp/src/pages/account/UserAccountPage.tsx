import { useSession } from "@inrupt/solid-ui-react";
import PointSummaryWithMap from "../../components/points/PointSummaryWithMap";
import AccountLayout from "../../layouts/AccountLayout";

import "../../public/css/pages/account/UserAccountPage.scss";
import { useAllPointsStore } from "../../store/point.store";
import BaseButton from "../../components/buttons/BaseButton";
import { createContainerAt } from "@inrupt/solid-client";
import { checkContainerExists, createNewContainer } from "../../helpers/PodHelper";

function UserAccountPage() {
  const {session} = useSession();
  const { points } = useAllPointsStore();

  const handleAddNewFolder = async () => {
    const check1 = await checkContainerExists(session, "prueba0001");
    const check2 = await checkContainerExists(session, "prueba0002").catch((err) => {
      console.log("error", err);
    });
    const check3 = await checkContainerExists(session, "profile");
    console.log("check1", check1);
    console.log("check2", check2);
    console.log("check3", check3);
    // const containerUrl = session.info.webId?.replace("/profile/card#me", "") + "/prueba0001";
    // console.log(containerUrl);

    // createNewContainer(session, "prueba0001");
  }

  return (
    <AccountLayout hasBanner={true}>
      <div className="user-account-container">
        <section className="user-account-container__body">
          {/* Listado de puntos creados por el usuario */}
          <h2>Mis puntos</h2>
          <BaseButton type="" text="Añadir carpeta" onClick={handleAddNewFolder}/>
          <div className="user-account-container-body__gallery">
            {points.length > 0 &&
              points.filter(point => point.owner.webId === session.info.webId).map((point) => {
                return (
                  <PointSummaryWithMap
                    key={point._id}
                    name={point.name}
                    address={point.location.address}
                    lat={point.location?.coords.lat || 0}
                    lng={point.location?.coords.lng || 0}
                    hasMap={true}
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
