import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import {
  findAllPoints,
  findAllPublicPoints,
  findPointById,
  findPointsByCategory,
  addPoint,
  editPointById,
  deletePoint,
  addReviewPoint,
  deleteReviewByPoint,
  findAllReviewByPoint
} from "../../api/api";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/home/HomePage.scss";
import { Point } from "leaflet";
import { Category, Review, Reviewer } from "../../shared/shareddtypes";


function HomePage() {
  const [points, setPoints] = useState([]);
  const { session } = useSession();
  const loadAllPoints = async () => {
    // const webId: string =
    // getDefaultSession().info.webId || "https://id.inrupt.com/uo257239";
    // const result = await findAllPoints();
    // const result = await findAllPublicPoints();
    // const result = await findPointById("1");
    // const result = await findPointsByCategory("bar");
    // const result = await addPoint({
    //     _id: crypto.randomUUID(),
    //     name: "Point 1",
    //     description: "Point 1 description",
    //     category: Category.BAR,
    //     isPublic: true,
    //     location: {
    //       address: "",
    //       postalCode: 1111,
    //       city: "City 1",
    //       country: "Country 1",
    //       coords : {lat:0,lng:0}
    //     },
    //     owner: {
    //       webId : "https://localhost:8443/profile/card#me",
    //       imageUrl : ""
    //     },
    //     reviews: [],
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   });
    // const result = await editPointById("1", body);
    // const result = await deletePoint("1");

    const result = await addReviewPoint("1",
    {
      _id: "nueva",
      reviewer: {
        webId: "https://localhost:8443/profile/card#me",
        imageUrl: ""
      } as Reviewer,
      rating: 5,
      comment: "This is a comment",
      createdAt: "2018-01-24T15:00:00.000Z"
    } as unknown as Review
    );
    // const result = await deleteReviewByPoint("1", "2");
    // const result = await findAllReviewByPoint("1");

    console.log(result)
    // setPoints(result)
  };

  useEffect(() => {
    loadAllPoints();
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
