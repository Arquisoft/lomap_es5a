import React from "react";
import TopAccountAside from "../../components/asides/accountAside/TopAccountAside";
import UploadImageButton from "../../components/buttons/UploadImageButton";
import Footer from "../../components/footer/Footer";
import CreatePointForm from "../../components/forms/CreatePointForm";
import MapWithDragableMarker from "../../components/maps/MapWithDragableMarker";
import "../../public/css/pages/points/CreatePointPage.css";
import { usePointDetailsStore } from "../../store/point.store";

function CreatePointPage() {
  const { info } = usePointDetailsStore();

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
            position={
              info.location.coords
            }
            styles={{
              position: "relative",
              width: "400px",
              height: "455px",
              borderRadius: "20px",
            }}
          />
          <div className="create-form-buttons">
            <UploadImageButton />
          </div>
        </div>
      </div>
      <div className="create-point-footer">
        <Footer />
      </div>
    </div>
  );
}

export default CreatePointPage;
