import SinglePointDetailBanner from "../../components/banners/pointDetail/SinglePointDetailBanner";
import AuthenticatedLayout from "../../layouts/AutenticatedLayout";
import "../../public/css/pages/points/SinglePointPage.scss";
import { usePointDetailsStore } from "../../store/point.store";

function SinglePointDetailsPage() {
  const { pointToShow } = usePointDetailsStore();

  return (
    <AuthenticatedLayout>
      <div className="single-point-details-container">
        <SinglePointDetailBanner pointImage={pointToShow?.image?.url || ""}/>
        <section className="single-point-details__details">
          <h2>Detalles</h2>
          <div>
            {pointToShow && (
              <div>
                <p>Nombre: {pointToShow.name}</p>
                <p>Descripción: {pointToShow.description}</p>
                <p>Latitud: {pointToShow.location.coords.lat}</p>
                <p>Longitud: {pointToShow.location.coords.lng}</p>
              </div>
            )}
          </div>
        </section>

        {/* <section className="single-point-details__reviews">
          <h2>Valoraciones</h2>
        </section> */}
      </div>
    </AuthenticatedLayout>
  );
}

export default SinglePointDetailsPage;
