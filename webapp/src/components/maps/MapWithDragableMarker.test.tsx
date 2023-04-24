import { cleanup, render, screen } from "@testing-library/react";

import MapWithDragableMarker from "./MapWithDragableMarker";

describe("MapWithDragableMarker component", () => {
  afterAll(cleanup);

  test("renders map", () => {
    const position = {
      lat: 41.3851,
      lng: 2.1734,
    };

    render(<MapWithDragableMarker position={position} />);

    const mapElement = document.querySelector(
      ".map-with-dragable-marker-container"
    );
    expect(mapElement).toBeInTheDocument();

    // Texto informativo del mapa
    const infoItem = screen.getByText(
      "Mueve el marcador para obtener las coordenadas"
    );
    expect(infoItem).toBeInTheDocument();

    // Icono de informacion
    const infoIcon = screen.getByTestId("info-outlined");
    expect(infoIcon).toBeInTheDocument();
  });

  test("recenter map when marker is dragged", () => {
    const position = {
      lat: 41.3851,
      lng: 2.1734,
    };

    render(<MapWithDragableMarker position={position} />);

    const mapElement = document.querySelector(
      ".map-with-dragable-marker-container"
    );
  });
});
