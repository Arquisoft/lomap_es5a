import { ChangeEvent, useState } from "react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { generateUUID } from "../../../utils/stringUtils";
import BaseCheckboxInput from "../../inputs/BaseCheckboxInput";
import {Friend} from "../../../shared/shareddtypes";
import {getAllFriends} from "../../../api/friends.api";
import { useSession } from "@inrupt/solid-ui-react";
import { useUserStore } from "../../../store/user.store";



function BottomAccountAside(){
    const { session } = useSession();
    const {setFriends, friends} = useUserStore();

    const amigo:Friend = {
        webId : "",
        name : "",
        imgUrl : ""
    }

    //cargar lista de amigos
    const loadAllFriends = async () => {
        const allfriends = getAllFriends(session.info.webId as string);

    };
    
    //contiene la lista de amigos que podran recogerse fuera de este componente
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
    const handleCheckbox = (isChecked:boolean) => {
        //TODO: añadir a la lista de amigos si se selecciona o eliminarlo si no esta seleccionado
        console.log(isChecked)
        if(isChecked){
            //añadirlo

            //limpiar el valor de amigo
            
        }else{
            //borrar

            //limpiar el valor de amigo

        }
    };

    return(
        <div>
            <div className="base-textarea-container">
                <label htmlFor={generateUUID()}>{"Compartido con"}</label>
                <div className="friend-list">
                    {friends?.map((friend)=>{});}
                    <BaseCheckboxInput onCheckboxChange={handleCheckbox}/>
                </div>
            </div>
        </div>
    )
}

export default BottomAccountAside