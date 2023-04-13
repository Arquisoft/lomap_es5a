import React from "react";
import { ImageRoundedIcon } from "../../helpers/IconContants";

import "../../public/css/components/skeletons/no_image/NoImageSkeleton.scss";

type Props = {
  styles?: React.CSSProperties | string;
  isRound?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

function NoImageSkeleton({ isRound, onClick }: Props) {
  return (
    <div
      className="no-image-skeleton-container"
      style={{
        borderRadius: isRound ? "50%" : "8px",
      }}
      onClick={onClick}
    >
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
