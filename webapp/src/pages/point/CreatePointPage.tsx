import CreatePointForm from "../../components/forms/CreatePointForm";
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import AccountLayout from "../../layouts/AccountLayout";
import "../../public/css/pages/points/CreatePointPage.css";
import { usePointDetailsStore } from "../../store/point.store";

function CreatePointPage() {
  const {info} = usePointDetailsStore();

  return (
    <AccountLayout hasBanner={false}>
      <div className="main-create-point">
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
