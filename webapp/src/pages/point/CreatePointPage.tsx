
import "../../public/css/pages/points/CreatePointPage.css";
import CreatePointForm from "../../components/forms/CreatePointForm";
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import TopAccountAside from "../../components/asides/accountAside/TopAccountAside";
import Footer from "../../components/footer/Footer";
import { usePointDetailsStore } from "../../store/point.store";


function CreatePointPage() {
  const {info} = usePointDetailsStore();

  return (
    <div className="create-point-principal">
      <div className="main-create-point">
        <div className="create-point-aside">
          <TopAccountAside />
        </div>
        <div className="create-point-form">
          <CreatePointForm />
        </div>
        <div className="create-point-map">
          <MapWithDragableMarker
            position={info.location.coords || {
              lat: 43.362503991605806,
              lng: -5.8507845362433235,
            }}
            styles={{
              width: "400px",
              height: "455px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
      <div className="create-point-footer">
        <Footer />
      </div>
    </div>
  );
}

export default CreatePointPage;
