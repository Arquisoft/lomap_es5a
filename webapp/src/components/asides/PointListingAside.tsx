import { Link } from "react-router-dom";
import PointSummaryCard from "../cards/PointSummaryCard";

import "../../public/css/components/asides/PointListingAside.scss";

function PointListingAside() {
  return (
    <div className="point-listing-aside-container">
      <div className="point-listing-aside__head">
        <p>Puntos de interés recientes</p>
        <button>Ver todos</button>
      </div>

      <div className="point-listing-aside__body">
        <PointSummaryCard
          imgUrl="https://images.unsplash.com/photo-1654073370360-faee4b9d9ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80"
          pointName="Sidrería Tierra Astur"
          pointUser="Pablo Rodriguez"
          pointCreatedAt="08:20"
        />

        <PointSummaryCard
          imgUrl="https://images.unsplash.com/photo-1661431324383-8b4d7fa54725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          pointName="Calle de Oviedo"
          pointUser="Luisa Pérez"
          pointCreatedAt="Hace 1 día"
        />

        <PointSummaryCard
          imgUrl="https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9sb21pdGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          pointName="Dolomitas"
          pointUser="Sergio Vázquez"
          pointCreatedAt="Hace 1 semana"
        />
      </div>
    </div>
  );
}

export default PointListingAside;
