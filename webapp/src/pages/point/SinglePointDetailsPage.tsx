import { useEffect } from "react";
import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import usePoint from "../../hooks/usePoint";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";

function SinglePointDetailsPage() {
  const {info} = usePointDetailsStore();

  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container">
        <SinglePointDetailBanner />
        <section className="single-point-details__details">
          <h2>Detalles</h2>
          <p>
            {
              info && <div>
                <p>Nombre: {info.name}</p>
                <p>Descripción: {info.description}</p>
                <p>Latitud: {info.location.coords.lat}</p>
                <p>Longitud: {info.location.coords.lng}</p>

              </div>
            }
          </p>
        </section>

        {/* <section className="single-point-details__reviews">
          <h2>Valoraciones</h2>
        </section> */}
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
