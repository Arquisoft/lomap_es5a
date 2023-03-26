import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import {
  findAllPoints
} from "../../api/api";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/home/HomePage.scss";

function HomePage() {
  const [points, setPoints] = useState([]);
  const { session } = useSession();

  const loadAllPoints = async () => {
    // const webId: string =
    // getDefaultSession().info.webId || "https://id.inrupt.com/uo257239";
    const result = await findAllPoints();
    // const result = await findAllPublicPoints();
    // const result = await findPointById("1");
    // const result = await findPointsByCategory("futbol");
    // const result = await addPoint();
    // const result = await editPointById("1", body);
    // const result = await deletePoint("1");

    // const result = await addReviewPoint("1");
    // const result = await editReviewByPoint("1", body);
    // const result = await findAllReviewPoint("1");
    // const result = await findAllReviewByUser();

    console.log(result)
    // setPoints(result)
  };

  useEffect(() => {
    //loadAllPoints();
    // parsePoints();
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
