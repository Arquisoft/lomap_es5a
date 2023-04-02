import { useEffect, useMemo } from "react";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import { useSession } from "@inrupt/solid-ui-react";
import { addPoint, editPointById, findAllPoints, findPointsByCategory } from "../../api/point.api";
import BaseMap from "../../components/maps/BaseMap";
import "../../public/css/pages/home/HomePage.scss";
import { useAllPointsStore } from "../../store/point.store";
import { Category, Point } from "../../shared/shareddtypes";

function HomePage() {
  //const [points, setPoints] = useState([]);
  const { setAllPoints, points } = useAllPointsStore();

  const { session } = useSession();
  
  const loadAllPoints = () => {
     addPoint({
         _id: crypto.randomUUID(),
         name: "Point 1",
         description: "Point 1 description",
         category: Category.BAR,
         isPublic: true,
         location: {
           address: "",
           postalCode: 1111,
           city: "City 1",
           country: "Country 1",
           coords : {lat:0,lng:0}
         },
         owner: {
           webId : "https://localhost:8443/profile/card#me",
           imageUrl : ""
         },
         reviews: [],
         createdAt: new Date(),
         updatedAt: new Date()
       }, session.info.webId as string);
   
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
