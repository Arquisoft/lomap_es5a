import { useState } from "react"
import "../../public/css/components/forms/CreatePointForm.css"
import BaseButton from "../buttons/BaseButton"
import { addPoint } from "src/api/api"
import { Console } from "console"



function CreatePointForm(){

    const [point,setPoint] = useState({
        name: '',
        address: '',
        lat: '',
        lng:'',
        category: '',
        description:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPoint({
            ...point,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="create-form-main">
            <div className="create-form-title">
                Crear un punto
            </div>
            <div className="create-form-info">
                Los campos con (*) son obligatorios.
            </div>
            <form >
                <div className="create-form-form">
                    <div className="create-form-form-name">
                        Nombre
                        <input onChange={handleChange} value={point.name} type="text" name="name" placeholder="Sidreria Tierra Astur"/>
                    </div>

                    <div className="create-form-form-coords">
                        Coordenadas
                        <div className="create-form-form-coords-inputs">
                            <input onChange={handleChange} value={point.lat} type="text" name="lat" placeholder="Latitud"/><input onChange={handleChange} value={point.lng} type="text" name="lng" placeholder="Longitud"/>
                        </div>
                    </div>

                    <div className="create-form-form-address">
                        Direcciós postal
                        <input onChange={handleChange} value={point.address} type="text" name="address" placeholder="Calle Gascona,1"/>
                    </div>

                    <div className="create-form-form-category">
                        Categoria
                        <input onChange={handleChange} value={point.category} type="text" name="category" placeholder="Categoria" />
                    </div>
                    <div className="create-form-form-description">
                        Descripción
                        <input onChange={handleChange} value={point.description} type="text" name="description" placeholder="¿Tienes algo que añadir? Este es tu momento" />
                    </div>
                </div>
                <div className="create-form-buttons">
                    <div className="create-form-buttonrigth">
                        <BaseButton type="button-red-form" text="Publicar" onClick={() => ""} />
                    </div>
                    <div className="create-form-buttonleft"> 
                        <BaseButton type="button-grey-form" text ="Cancelar" onClick={() => ""} />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreatePointForm