import { ChangeEvent, useState } from "react";
import "../../../public/css/components/asides/accountAside/BottomAccountAside.css";
import { generateUUID } from "../../../utils/stringUtils";
import BaseCheckboxInput from "../../inputs/BaseCheckboxInput";
import { el } from "date-fns/locale";




function BottomAccountAside(){

    type Amigo = {
        id: string;
        nombre: string;
        imagen: string;
    }
    const amigo:Amigo = {
        id: "",
        nombre: "",
        imagen: ""
    }

    //cargar lista de amigos
    
    //contiene la lista de amigos que podran recogerse fuera de este componente
    const [amigos,setAmigos] = useState<Amigo[]>([]);
    //Funciones para añadir o eliminar y comprobar la lista de amigos
    const añadirAmigo = (amigo:Amigo) => {
        setAmigos([...amigos,amigo]);
    };
    const eliminarAmigo = (amigoAEliminar:Amigo) => {
        setAmigos(amigos.filter(amigo => amigo.id !== amigoAEliminar.id));
    };
    const verificaAmigo = (amigoVerificar:Amigo) => {
        return amigos.some(amigo => amigo.id === amigoVerificar.id);
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
                    {/*{friends.map((friend)=>{
                        //const amigo:Amigo = {} vamos creando el amigo
                        //añadir el amigo con sus datos en el cuadro
                        //imagen
                        //nombre
                        //checkbox //añadir una funcion para cuando este seleccionado se almacene en amigos seleccionados
                        //<BaseCheckboxInput ...añadir funcionescallback si estan pulsados y añadir el amigo en caso de q lo este.../>
                    })}
                    */}
                    <BaseCheckboxInput onCheckboxChange={handleCheckbox}/>
                </div>
            </div>
        </div>
    )
}

export default BottomAccountAside