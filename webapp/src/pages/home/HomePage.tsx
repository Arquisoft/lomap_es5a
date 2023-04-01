import { useEffect, useState } from "react";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";

import { useSession } from "@inrupt/solid-ui-react";

import { addPoint, findAllPoints } from "../../api/point.api";
import BaseMap from "../../components/maps/BaseMap";
import "../../public/css/pages/home/HomePage.scss";
import { Category } from "../../shared/shareddtypes";

function HomePage() {
  const [points, setPoints] = useState([]);

  const { session } = useSession();
  
  const loadAllPoints = async () => {
    const result: any = await findAllPoints();
    console.log(result);
    setPoints(result);
  };

  const addNewPoint = async () => {
    let newPoint = {
      _id: "",
      name: "",
      description: "ffff",
      location: {
        address: "",
        postalCode: 0,
        city: "",
        country: "",
        coords: {
          lat: 43.362503991605806,
          lng: -5.8507845362433235,
        },
      },
      owner: {
        webId: "",
        name: "",
        imageUrl: "",
      },
      reviews: [],
      image: {
        url: "",
        alt: "",
      },
      isPublic: false,
      category: Category.BAR,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await addPoint(newPoint);
  };

  useEffect(() => {
    //getAllFriends();
    loadAllPoints();
    //addNewPoint();
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
