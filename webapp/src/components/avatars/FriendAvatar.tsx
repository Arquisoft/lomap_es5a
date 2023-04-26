import React from "react";
import IconButton from "../buttons/IconButton";

type Props = {
  name: string;
  imgUrl?: string;
  webId?: string;
  vista?: string
};



function FriendAvatar({ name, imgUrl, webId ,vista}: Props) {
  
  const handleDeleteFriend = ( e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();
  };

  return (
    <div className="friend-comp">
      <img src={imgUrl} />
      <p>{name}</p>
      <p>{webId}</p>
      {
      vista !== "vista-add-point" ? 
        <IconButton type="button-red-form" text="Eliminar" muaIconName="delete" handleClick={handleDeleteFriend} /> 
        : <div/>
      }
    </div>
  );
}

export default FriendAvatar;
