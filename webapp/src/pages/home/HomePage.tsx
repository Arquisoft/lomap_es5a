import { useSession } from "@inrupt/solid-ui-react";
import { useEffect } from "react";
import {
  findAllPoints
} from "../../api/point.api";
import { getUserProfileInfo } from "../../api/user.api";
import PointListingAside from "../../components/asides/PointListingAside";
import BaseFilterBar from "../../components/filters/BaseFilterBar";
import BaseMap from "../../components/maps/BaseMap";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/home/HomePage.scss";
import { Point } from "../../shared/shareddtypes";
import { useAllPointsStore } from "../../store/point.store";
import { Category, Point } from "../../shared/shareddtypes";
import { getUserProfile, getUserProfileInfo } from "../../api/user.api";
import { getAllFriends, addFriend } from "../../api/friends.api";
import { useUserStore } from "../../store/user.store";
import { createPortal } from 'react-dom';
import PointCategoryFilterPopup from "../../components/popups/PointCategoryFilterPopup";
import { getStringNoLocale, Thing } from "@inrupt/solid-client";
import { FOAF } from "@inrupt/vocab-common-rdf";

function HomePage() {
  const { setAllPoints, points, isFiltering, filteredPoints, showFilterPopup } = useAllPointsStore();
  const {setName, setImageUrl, setFriends } = useUserStore();
  const { session } = useSession();

  const loadAllPoints = async () => {
    const data: Point[] = await findAllPoints(session.info.webId as string);
    setAllPoints(data);
  };

  const loadUserFriends = async () => {
    if (session.info.isLoggedIn){
      const friends = await getAllFriends(session.info.webId as string);
      console.log(friends);
    }else{
      console.log("No estoy logeado");
    }
  }

  const loadUserInfo = async () => {
    const userInfo = await getUserProfileInfo(session.info.webId as string);
    setName(userInfo?.name ?? session.info.webId?.split("/")[2]);
    setImageUrl(userInfo.imageUrl);
    setFriends(userInfo.friends);
  };

  useEffect(() => {
    loadUserFriends();
    //loadUserInfo();
    //loadAllPoints();
  }, []);

  return (
    <div>
      <AuthenticatedLayout
        styles={{
          padding: "0 50px",
        }}
      >
        {showFilterPopup && createPortal(<PointCategoryFilterPopup />, document.body)}
        
        <div className="home-container">
          <BaseFilterBar />
          <div className="home-map-wrapper">
            <BaseMap
              position={[43.36297198377049, -5.851084856954243]}
              points={isFiltering ? filteredPoints : points}
              styles={{
                width: "100%",
                height: "80vh",
                borderRadius: "10px",
              }}
            />
            <PointListingAside points={isFiltering ? filteredPoints : points} />
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default HomePage;
