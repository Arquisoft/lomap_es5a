import AccountLayout from "../../layouts/AccountLayout";
import "../../public/css/pages/points/CreatePointPage.css";
import CreatePointForm from "../../components/forms/CreatePointForm";
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import useMarker from "../../hooks/useMarker";
import { useMarkerStore } from "../../store/map.store";

function CreatePointPage() {
  const currentPosition = useMarkerStore.getState().position;

  return (
    <AccountLayout hasBanner={false}>
      <div className="main-create-point">
        <div className="create-point-form">
          <CreatePointForm />
        </div>
        <div className="create-point-map">
          <MapWithDragableMarker
            position={currentPosition}
            styles={{
              width: "300px",
              height: "400px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </AccountLayout>
  );
}

export default CreatePointPage;
