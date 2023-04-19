import React from "react";


function BaseCheckboxInput(){
    const [isChecked, setIsChecked] = React.useState(false); // Estado para mantener el valor del checkbox

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Manejador de eventos para cambiar el valor del estado del checkbox
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