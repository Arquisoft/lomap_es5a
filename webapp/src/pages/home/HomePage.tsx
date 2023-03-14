import { useState, useEffect, useCallback } from "react";
import { findAllPoints, findAllPointsByUser } from "src/api/api";
import PointListingAside from "src/components/asides/PointListingAside";
import BaseFilterBar from "src/components/filters/BaseFilterBar";
import BaseMap from "src/components/maps/BaseMap";
import AuthenticatedLayout from "src/layouts/AutenticatedLayout";
import "../../public/css/pages/home/HomePage.scss";


function HomePage() {
  const [points, setPoints] = useState([]);

  const loadAllPoints = async () => {
    // const webId: string =
    //   getDefaultSession().info.webId || "https://id.inrupt.com/uo257239";
    const result = await findAllPoints();
    setPoints(result);
  };

  useEffect(() => {
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
            <PointListingAside />
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default HomePage;
