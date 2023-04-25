import { render } from "@testing-library/react";
import { MapContainer } from "react-leaflet";
import DraggableMarker from "./DragableMarker";

describe("Component Dragable Marker", () => {
  test("render dragable marker", () => {
    render(
      <MapContainer
        id="map"
        center={[41.3851, 2.1734]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <DraggableMarker />
      </MapContainer>
    );

    const marker = document.querySelector(".leaflet-marker-draggable");
    expect(marker).toBeInTheDocument();
  });
});
