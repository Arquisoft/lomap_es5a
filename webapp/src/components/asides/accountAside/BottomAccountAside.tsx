import { useSession } from "@inrupt/solid-ui-react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css"
import { generateUUID } from "../../../utils/stringUtils"
import FriendAvatar from "../../avatars/FriendAvatar"
import { useUserStore } from "../../../store/user.store";
import { getAllFriends } from "../../../api/friends.api";
import { useEffect } from "react";

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
        <div className="friends-container">
                <label htmlFor={generateUUID()}></label>
                <div className="friend-list">
                    {friends ? 
                            friends.map((friend) =>{ //realizar la construccion del amigo
                                return(
                                    <div className="friend-component" key={friend.webId}>
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