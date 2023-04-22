import red from "@mui/material/colors/red";
import { FavoriteIcon } from "../../../helpers/IconContants";
import "../../../public/css/components/points/details/SingleDetails.css";
import { Point } from "../../../shared/shareddtypes";
import CategoryComp from "./review/single/CategoryComp";
import CoordComp from "./review/single/CoordComp";
import UserComp from "./review/single/UserComp";

type Props = {
  pointToShow: Point;
};

function SingleDetail(point: Props) {
  return (
    <div className="single-details-containter" role="container">
      <h2>Detalles</h2>
      {point.pointToShow && (
        <div className="single-details-details" role="details">
          <div className="single-details-details-name" role="details-name">
            <div> Nombre: </div> <div role="name">{point.pointToShow.name} </div>
          </div>
          <div className="single-details-details-coord" role="container-coords">
            <div>Coordenadas:</div>
            <div className="single-details-details-coord-dir" role="coords">
              <CoordComp coord={point.pointToShow.location.coords.lat} />
              <CoordComp coord={point.pointToShow.location.coords.lng} />
            </div>
          </div>
          <div className="single-details-details-direction" role="direction">
            <div>Dirección: </div>{" "}
            <div role="direction-text">{point.pointToShow.location.address}</div>
          </div>
          <div className="single-details-details-category" role="category">
            <div>Categoria: </div>{" "}
            <div role="category-text">
              {" "}
              <CategoryComp category={point.pointToShow.category} />{" "}
            </div>
          </div>
          <div className="single-details-details-user" role="user">
            <div>Usuario: </div>{" "}
            <div>
              <UserComp
                urlImage={point.pointToShow.owner.imageUrl}
                name={point.pointToShow.owner.name}
              />
            </div>
          </div>
          <div className="single-details-details-user-saved" role="saved">
            <div>Guardado: </div>{" "}
            <div>
              <FavoriteIcon style={{ color: red[500] }} aria-hidden="true" />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleDetail;
