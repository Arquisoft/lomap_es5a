import { useSession } from "@inrupt/solid-ui-react";

import red from "@mui/material/colors/red";

import { useEffect, useState } from "react";

import { isPointSaved } from "../../../api/save.point.api";

import { FavoriteIcon } from "../../../helpers/IconContants";

import "../../../public/css/components/points/details/SingleDetails.css";

import { Point } from "../../../shared/shareddtypes";

import CategoryComp from "./review/single/CategoryComp";

import CoordComp from "./review/single/CoordComp";

import UserComp from "./review/single/UserComp";

type Props = {
  pointToShow: Point;
};

function SingleDetail({ pointToShow }: Props) {


  const { session } = useSession();

  
  return (
    <div className="single-details-containter" role="container">
       <h2>Detalles</h2>{" "}
      {pointToShow && (
        <div className="single-details-details" role="details">
          {" "}
          <div className="single-details-details-name" role="details-name">
             <div> Nombre: </div>{" "}
            <div role="name">{pointToShow.name} </div>{" "}
          </div>
         {" "}
          <div className="single-details-details-coord" role="container-coords">
             <div>Coordenadas:</div>{" "}
            <div className="single-details-details-coord-dir" role="coords">
              {" "}
              <CoordComp coord={pointToShow.location.coords.lat} />{" "}
              <CoordComp coord={pointToShow.location.coords.lng} />{" "}
            </div>
            {" "}
          </div>
         {" "}
          <div className="single-details-details-direction" role="direction">
             <div>Dirección: </div> {" "}
            <div role="direction-text">{pointToShow.location.address}</div>
            {" "}
          </div>
          {" "}
          <div className="single-details-details-category" role="category">
             <div>Categoria: </div>{" "}
            <div role="category-text">
             {" "}
              <CategoryComp category={pointToShow.category} />{" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="single-details-details-user" role="user">
           <div>Usuario: </div>{" "}
            <div>
              {" "}
              <UserComp
                urlImage={pointToShow.owner.imageUrl}
                name={pointToShow.owner.name}
              />
              {" "}
            </div>
            {" "}
          </div>
        </div>
      )}
      {" "}
    </div>
  );
}

export default SingleDetail;
