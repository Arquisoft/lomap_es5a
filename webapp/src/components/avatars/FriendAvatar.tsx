import React from "react";

type Props = {
  name: string;
  imgUrl?: string;
  webId?: string;
};

function FriendAvatar({ name, imgUrl, webId }: Props) {
  return (
    <div className="friend-comp">
      <img src={imgUrl} />
      <p>{name}</p>
      <p>{webId}</p>
    </div>
  );
}

export default FriendAvatar;
