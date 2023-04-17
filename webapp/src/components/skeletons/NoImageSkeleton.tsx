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
      data-testid = "skeleton"
      className="no-image-skeleton-container"
      style={{
        borderRadius: isRound ? "50%" : "8px",
      }}
      onClick={onClick}
      role="figure"
    >
      <ImageRoundedIcon
        data-testid = "rounded-icon"
        style={{
          fontSize: "2rem",
          color: "#B9B9B9",
        }}
      />
    </div>
  );
}

export default NoImageSkeleton;