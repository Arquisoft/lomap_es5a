import { useSession } from "@inrupt/solid-ui-react";
import { useEffect } from "react";
import "../../../src/public/css/components/cards/point/FriendsCards.css";
import { getAllFriends } from "../../api/friends.api";
import { Friend } from "../../shared/shareddtypes";
import { useUserStore } from "../../store/user.store";
import { generateUUID } from "../../utils/stringUtils";
import FriendAvatar from "../avatars/FriendAvatar";


type Props = {
    amigos: Friend[]; // Lista de amigos seleccionados
    añadirAmigo: (amigo: Friend) => void; // Función para añadir amigo
    eliminarAmigo: (amigo: Friend) => void; // Función para eliminar amigo
    verificaAmigo: (amigo: Friend) => boolean; // Función para verificar si el amigo está en la lista  
}


function FriendsCard({
    amigos,
    añadirAmigo,
    eliminarAmigo,
    verificaAmigo
} :Props){

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


    //amigos seleccionados
    const handleCheckbox = (isChecked:boolean , friend:Friend) => {
        if(isChecked){
            añadirAmigo(friend);
        }else{
            eliminarAmigo(friend);
        }
    };

    return(
            <div className="friends-container">
                <label htmlFor={generateUUID()}>{"Compartido con"}</label>
                <div className="friend-list">
                    {friends ? 
                            friends.map((friend) =>{ //realizar la construccion del amigo
                                return(
                                    <div className="friend-list-comp" key={generateUUID()}>
                                    <FriendAvatar 
                                        key={friend.webId}
                                        name={friend.name}
                                        imgUrl={friend.imgUrl} 
                                        vista="vista-add-point"
                                    />
                                    <label htmlFor="checkbox"/>
                                    <input
                                    type="checkbox"
                                    onChange={ e => {handleCheckbox(e.target.checked, friend)}}
                                    id="checkbox"
                                    />
                                    </div>
                                )
                            }) 
                         : (
                            <p>Sin amigos disponibles</p>
                        )}
                    {/* <BaseCheckboxInput onCheckboxChange={handleCheckbox}/> */}
                </div>
            </div>
    )
}

export default FriendsCard;