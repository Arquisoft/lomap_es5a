import { ChangeEvent } from "react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { generateUUID } from "../../../utils/stringUtils";


function BottomAccountAside(){
    //cargar lsita de amigos

    //contiene la lista de amigos que podran recogerse fuera de este componente

    //amigos seleccionados

    return(
        <div>
            <div className="base-textarea-container">
                <label htmlFor={generateUUID()}>{"Compartido con"}</label>
                <div className="friend-list">
                    {friends.map((friend)=>{
                        //añadir el amigo con sus datos en el cuadro
                        //imagen
                        //nombre
                        //checkbox //añadir una funcion para cuando este seleccionado se almacene en amigos seleccionados
                        //<BaseCheckboxInput />
                    })}
                </div>
            </div>
        </div>
    )
}

export default BottomAccountAside