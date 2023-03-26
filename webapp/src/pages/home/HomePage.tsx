import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { useState, useEffect, useCallback } from "react";
import { findAllPoints, findAllPointsByUser } from "../../api/api";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import BaseMap from "../../components/maps/BaseMap";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import { useSession } from "@inrupt/solid-ui-react";
import "../../public/css/pages/home/HomePage.scss";
import { parseJsonToPoint } from "../../utils/parsers/pointParser";
import pointJson from './point.json';

function HomePage() {
  const [points, setPoints] = useState([]);
  const { session } = useSession();

  const loadAllPoints = async () => {
    // const webId: string =
    //   getDefaultSession().info.webId || "https://id.inrupt.com/uo257239";
    const result = await findAllPoints(getDefaultSession().info.webId || "");
    console.log(result);
    //setPoints(result);
  };

  const parsePoints = () => {
    //console.log(pointJson);
   const p = parseJsonToPoint(pointJson);
   console.log(p);
  }

  useEffect(() => {
    //loadAllPoints();
    parsePoints();
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
            {/* <BaseMap
              position={[43.36297198377049, -5.851084856954243]}
              points={points}
              styles={{
                width: "100%",
                height: "80vh",
                borderRadius: "10px",
              }}
            /> */}
            <p>{session.info.webId}</p>
            <p>{session.info.sessionId}</p>
            <PointListingAside />
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default HomePage;
