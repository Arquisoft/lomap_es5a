import React, { useState } from "react";
import IconButton from "../buttons/IconButton";
import { useNavigate } from "react-router-dom";
import {deleteFriend} from "../../api/friends.api";
import { useSession } from "@inrupt/solid-ui-react";
import { ACCOUNT_PATH } from "../../routes";
type Props = {
  name: string;
  imgUrl?: string;
  webId?: string;
  vista?: string
};



function FriendAvatar({ name, imgUrl, webId ,vista}: Props) {
  
  const navigate = useNavigate();
  const {session} = useSession();
  const [exists,setExist] = useState(true);

  const handleDeleteFriend = async ( e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();

    

    if(webId && session.info.webId){
      console.log("Entramos");
      await deleteFriend(session.info.webId, webId);      
      setExist(false);
      console.log(exists);
      navigate(ACCOUNT_PATH);
    }
    
  };

  if(!exists){
    console.log("Problemas aqui");
    return null;
  }
  return (
    <div className="friend-component-aside">
    <div role="friend-comp" className="friend-comp">
      <img role="friend-imagen" src={imgUrl} />
      <p role="friend-name">{name}</p>
      {
      vista !== "vista-add-point" ? 
        <IconButton  type="button-red-form" text="Eliminar" muaIconName="delete" handleClick={handleDeleteFriend} /> 
        : <div/>
      }
    </div>
    </div>
  );
}

export default FriendAvatar;
