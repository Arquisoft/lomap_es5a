import { usePointDetailsStore } from "../../../store/point.store";
import "../../../public/css/components/points/details/SingleDetails.css"

function SingleDetail() {
    const {info} = usePointDetailsStore();

    return(
        <div>
            <h2>Detalles</h2>
            
            {
              info && 
              <div>
                <p>Nombre: {info.name}</p>
                <p>Coordenadas: {info.location.coords.lat}  {info.location.coords.lng}</p>
                <p>Dirección: {info.location.address}</p>
                <p>Categoria: {info.category}</p>
                <p>Usuario:<img src={info.owner.imageUrl}></img>{info.owner.name}</p>
                <p>Guardado: </p>
              </div>
            }

        </div>
    )
}

export default SingleDetail;