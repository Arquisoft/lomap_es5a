import { ChangeEvent, useEffect, useState } from "react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { generateUUID } from "../../../utils/stringUtils";
import BaseCheckboxInput from "../../inputs/BaseCheckboxInput";
import {Friend} from "../../../shared/shareddtypes";
import {getAllFriends} from "../../../api/friends.api";
import { useSession } from "@inrupt/solid-ui-react";
import { useUserStore } from "../../../store/user.store";
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

    //contiene la lista de amigos seleccionados por el usuario
    const [amigos,setAmigos] = useState<Friend[]>([]);
    //Funciones para añadir o eliminar y comprobar la lista de amigos
    const añadirAmigo = (amigo:Friend) => {
        setAmigos([...amigos,amigo]);
    };
    const eliminarAmigo = (amigoAEliminar:Friend) => {
        setAmigos(amigos.filter(amigo => amigo.webId !== amigoAEliminar.webId));
    };
    const verificaAmigo = (amigoVerificar:Friend) => {
        return amigos.some(amigo => amigo.webId === amigoVerificar.webId);
    };

    //amigos seleccionados
    const handleCheckbox = (isChecked:boolean , friend:Friend) => {
        if(isChecked){
            añadirAmigo(friend);
        }else{
            eliminarAmigo(friend);
        }
    };

    return(
        <div>
            <div className="base-textarea-container">
                <label htmlFor={generateUUID()}>{"Compartido con"}</label>
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
        </div>
    )
}

export default BottomAccountAside;