import React from "react";

type Props = {
  name : string;
  imgUrl? : string;
}

function FriendAvatar({name,imgUrl}:Props){

    return(
        <div className="friend-comp">
            <img src={imgUrl}/>
            <p>{name}</p>
        </div>
    );
}

export default FriendAvatar