import React from "react";
import {BaseCheckboxInputProps} from "../../shared/shareddtypes";



function BaseCheckboxInput({onCheckboxChange} : BaseCheckboxInputProps){
    const [isChecked, setIsChecked] = React.useState(false); // Estado para mantener el valor del checkbox

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Manejador de eventos para cambiar el valor del estado del checkbox
    //llamada callback al elemento padre, comprobar que la funcion esa definida si onCheckboxChange fuese ?
    onCheckboxChange(!isChecked);
  };

    return(
        <div>
            <label htmlFor="checkbox"/>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="checkbox"
            />
        </div>
    );
}

export default BaseCheckboxInput