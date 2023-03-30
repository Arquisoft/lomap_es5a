import { useEffect, useState } from "react";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";

import { useSession } from "@inrupt/solid-ui-react";


import BaseMap from "../../components/maps/BaseMap";
import "../../public/css/pages/home/HomePage.scss";
import { addPoint, deletePoint, findAllPoints } from "../../api/point.api";

function HomePage() {
  const [points, setPoints] = useState([]);

  const { session } = useSession();
  const loadAllPoints = async () => {
    const result: any = await deletePoint("1");
    console.log(result);
    setPoints(result);
  };

  useEffect(() => {
    //getAllFriends();
    loadAllPoints();
  }, []);

  return (
    <div>
      <AuthenticatedLayout
        styles={{
          padding: "0 50px",
        }}
      >
        <div className="home-container">
          <BaseFilterBar />
          <div className="home-map-wrapper">
            <BaseMap
              position={[43.36297198377049, -5.851084856954243]}
              points={points}
              styles={{
                width: "100%",
                height: "80vh",
                borderRadius: "10px",
              }}
            />
            <PointListingAside points={points} />
          </div>
          <p>{session.info.webId}</p>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default HomePage;
