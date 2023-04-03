import React from "react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";

import "../../public/css/components/skeletons/no_image/NoImageSkeleton.scss";

type Props = {
  styles?: React.CSSProperties | string;
  isRound?: boolean;
};

function NoImageSkeleton({ styles, isRound }: Props) {
  return (
    <div className="no-image-skeleton-container" style={{
      borderRadius: isRound ? "50%" : "8px"
    }}>
      <ImageRoundedIcon
        style={{
          fontSize: "2rem",
          color: "#B9B9B9",
        }}
      />
    </div>
  );
}

export default NoImageSkeleton;
