import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../public/css/components/skeletons/BaseMapSkeleton.scss";

function BaseMapSkeleton() {
  return (
    <div className="basemap-skeleon-container">
      <Skeleton
        width="100%"
        height="100%"
        style={{ borderRadius: 10 }}
        duration={10}
      />
    </div>
  );
}

export default BaseMapSkeleton;
