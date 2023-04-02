import "../../public/css/pages/points/CreatePointPage.css";
import CreatePointForm from "../../components/forms/CreatePointForm";
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import { useMarkerStore } from "../../store/map.store";
import TopAccountAside from "../../components/asides/accountAside/TopAccountAside";
import Footer from "../../components/footer/Footer";

function CreatePointPage() {
  const currentPosition = useMarkerStore.getState().position;

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
            position={currentPosition}
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
