import { useSession } from "@inrupt/solid-ui-react";
import { useEffect, useState } from "react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { useUserStore } from "../../../store/user.store";
import { generateUUID } from "../../../utils/stringUtils";
import FriendAvatar from "../../avatars/FriendAvatar";
import BaseTextInput from "../../inputs/BaseTextInput";
import BaseButton from "../../buttons/BaseButton";
import {addFriend,getAllFriends} from "../../../api/friends.api";

function BottomAccountAside(){

    const { session } = useSession();
    const {setFriends, friends} = useUserStore();
    const [friendWebId, setFriendWebId] = useState("");

    //cargar lista de amigos
    const loadAllFriends = async () => {
        const allfriends = await getAllFriends(session.info.webId as string);
        setFriends(allfriends);
    };
    
    useEffect(() => {
        loadAllFriends();
    }, [friends]);
    
    const handleAddFriend = () => {
        addFriend(session.info.webId as string, friendWebId);
    };

    return(
        <div className="friends-container-aside">
            <div className="top-acc-aside-title">Amigos</div>
            <BaseTextInput
                label={""} 
                type={"text"} 
                placeholder="ej: amigo.inrupt.net"
                onChange={ (e) => 
                    {setFriendWebId(e.target.value)}
                }
            />
            <BaseButton
                data-testid="create-point-button"
                type="button-blue"
                text="Agregar amigo"
                onClick={handleAddFriend}
            />


                <label htmlFor={generateUUID()}></label>
                <div className="friend-list-aside">
                    {friends ? 
                            friends.map((friend) =>{ //realizar la construccion del amigo
                                return(
                                    <>    
                                    <FriendAvatar
                                        key={friend.webId}
                                        webId={friend.webId}
                                        name={friend.name}
                                        imgUrl={friend.imgUrl} 
                                    />
                                    </>
                                )
                            }) 
                         : (
                            <p>Sin amigos disponibles</p>
                        )}
                </div>
            </div>
    )
}

export default BottomAccountAside