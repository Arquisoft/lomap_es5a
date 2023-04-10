import { usePointDetailsStore } from "../../../store/point.store";
import "../../../public/css/components/points/details/SingleDetails.css"
import { FavoriteIcon } from "../../../helpers/IconContants";
import red from "@mui/material/colors/red"
import CategoryComp from "./review/single/CategoryComp";
import CoordComp from "./review/single/CoordComp";
import UserComp from "./review/single/UserComp";

function SingleDetail() {
    const {pointToShow} = usePointDetailsStore();

    return(
        <div className="single-details-containter">
            <h2>Detalles</h2>          
            {
              pointToShow && 
              <div className="single-details-details">
                <div className="single-details-details-name">
                  <div> Nombre: </div> <div>{pointToShow.name} </div>                 
                </div>
                <div className="single-details-details-coord">
                  <div>Coordenadas:</div>  
                  <div className="single-details-details-coord-dir">
                    <CoordComp coord = {pointToShow.location.coords.lat}/>
                    <CoordComp coord = {pointToShow.location.coords.lng}/> 
                  </div>
                </div>
                <div className="single-details-details-direction">
                  <div>Dirección: </div>  <div>{pointToShow.location.address}</div>
                </div>
                <div className="single-details-details-category">
                  <div>Categoria: </div> <div> <CategoryComp  category = {pointToShow.category}/>  </div>
                </div>
                <div className="single-details-details-user">
                  <div>Usuario: </div> <div><UserComp urlImage={pointToShow.owner.imageUrl} name={pointToShow.owner.name} /></div>
                </div>
                <div className="single-details-details-user-saved">
                  <div>Guardado: </div> <div><FavoriteIcon style={{ color: red[500] }} aria-hidden="true"/> </div>
                </div>
              </div>
            }

        </div>
    )
}

export default SingleDetail;