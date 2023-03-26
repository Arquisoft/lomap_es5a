import { useEffect } from "react";
import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import usePoint from "../../hooks/usePoint";
import "../../public/css/pages/points/SinglePointPage.scss";

function SinglePointDetailsPage() {
  const { selectedPoint, findPointById } = usePoint();

  useEffect(() => {
    findPointById("2");
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container">
        <SinglePointDetailBanner />
        <section className="single-point-details__details">
          <h2>Detalles</h2>
          <p>
            {
              selectedPoint && <div>
                <p>Nombre: {selectedPoint.name}</p>
                <p>Descripción: {selectedPoint.description}</p>
                <p>Latitud: {selectedPoint.coords.lat}</p>
                <p>Longitud: {selectedPoint.coords.lng}</p>

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
