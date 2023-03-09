import React from "react";
import "../../public/css/avatars/BaseAvatar.scss"

function BaseAvatar({...props}) {
  return (
    <>
        <img className="base-avatar" src={props.img} alt={props.imgAlt} />
    </>
  );
}

export default BaseAvatar;
