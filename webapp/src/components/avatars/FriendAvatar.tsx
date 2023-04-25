import React from "react";

type Props = {
  name : string;
  imgUrl? : string;
  webId? : string;
}

function FriendAvatar({name,imgUrl,webId}:Props){

    return(
        <div className="friend-comp" role="friend-comp">
            <img src={imgUrl} role="friend-imagen"/>
            <p role="friend-name">{name}</p>
            <p role="friend-webid">{webId}</p>
        </div>
    );
}

export default FriendAvatar