import React from "react";
import "../../public/css/avatars/BaseAvatar.scss";
import NoImageSkeleton from "../skeletons/NoImageSkeleton";

type Props = {
  img: string;
  imgAlt?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
};

function BaseAvatar({ img, imgAlt, onClick }: Props) {
  return (
    <>
    {
        img ? 
        (<img className="base-avatar" src={img} alt={imgAlt} title={imgAlt} onClick={onClick} />)
        : <NoImageSkeleton isRound={true} onClick={onClick}/>
    }
      
    </>
  );
}

export default BaseAvatar;
