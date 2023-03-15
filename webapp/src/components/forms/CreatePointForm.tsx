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

    const handleSubmit = () =>{
        
    }
    

    return (
        <div className="create-form-main">
            <div className="create-form-title">
                Crear un punto
            </div>
            <div className="create-form-info">
                Los campos con (*) son obligatorios.
            </div>
            <form onSubmit={handleSubmit} >
                <div className="create-form-form">
                    Nombre
                    <input onChange={handleChange} value={point.name} type="text" name="name" placeholder="Sidreria Tierra Astur"/>

                    Coordenadas
                    <input onChange={handleChange} value={point.lat} type="text" name="lat" placeholder="Latitud"/><input onChange={handleChange} value={point.lng} type="text" name="lng" placeholder="Longitud"/>

                    Direcciós postal
                    <input onChange={handleChange} value={point.address} type="text" name="address" placeholder="Calle Gascona,1"/>

                    Categoria
                    <input onChange={handleChange} value={point.category} type="text" name="category" placeholder="Categoria" />

                    Descripción
                    <input onChange={handleChange} value={point.description} type="text" name="description" placeholder="¿Tienes algo que añadir? Este es tu momento" />
                </div>
                <div className="create-form-buttons">
                    <div className="create-form-buttonrigth">
                        <BaseButton type="button-red-form" text="Publicar" />
                    </div>
                    <div className="create-form-buttonleft"> 
                        <BaseButton type="button-grey-form" text ="Cancelar" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreatePointForm