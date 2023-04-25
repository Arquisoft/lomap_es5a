import { useSession } from "@inrupt/solid-ui-react";
import { useEffect } from "react";
import { getAllFriends } from "../../../api/friends.api";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { useUserStore } from "../../../store/user.store";
import { generateUUID } from "../../../utils/stringUtils";
import FriendAvatar from "../../avatars/FriendAvatar";

function BottomAccountAside(){

    const { session } = useSession();
    const {setFriends, friends} = useUserStore();

    //cargar lista de amigos
    const loadAllFriends = async () => {
        const allfriends = await getAllFriends(session.info.webId as string);
        setFriends(allfriends);
    };
    
    useEffect(() => {
        loadAllFriends();
    }, []);
    
    return(
        <div className="friends-container-aside">
                <label htmlFor={generateUUID()}></label>
                <div className="friend-list-aside">
                    {friends ? 
                            friends.map((friend) =>{ //realizar la construccion del amigo
                                return(
                                    <div className="friend-component-aside" key={friend.webId}>
                                    <FriendAvatar 
                                        key={friend.webId}
                                        name={friend.name}
                                        imgUrl={friend.imgUrl} 
                                    />
                                    <label htmlFor="checkbox"/>
                                    </div>
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