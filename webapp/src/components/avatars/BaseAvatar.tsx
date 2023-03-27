import React from "react";
import "../../public/css/avatars/BaseAvatar.scss";

type Props = {
  img: string;
  imgAlt?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
};

function BaseAvatar({ img, imgAlt, onClick }: Props) {
  return (
    <>
      <img className="base-avatar" src={img} alt={imgAlt} onClick={onClick} />
    </>
  );
}

export default BaseAvatar;
