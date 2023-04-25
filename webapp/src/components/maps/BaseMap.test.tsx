import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import BaseMap from "./BaseMap";

import getPoints from "./baseMapPoint_mock";

describe("BaseMap component", () => {
  afterAll(cleanup);

  test("renders map", () => {
    render(<BaseMap points={getPoints()} />);

    const mapElement = document.querySelector(".leaflet-container");
    expect(mapElement).toBeInTheDocument();
  });

  test("Simular doble click mapa, se muestra alerta", () => {
    // Alerta de confirmación
    jest.spyOn(window, "alert").mockImplementation(() => {
      return true;
    });

    const { container } = render(<BaseMap points={getPoints()} />);

    const mapElement = container.querySelector("#map");
    expect(mapElement).toBeInTheDocument();

    if (!mapElement) {
      return;
    }

    fireEvent.dblClick(mapElement);

    waitFor(() => {
      expect(mapElement).toBeInTheDocument();
      expect(window.alert).toBeCalledWith("¿Quieres crear un punto aquí?");
    });
  });

  test("Hay puntos, se muestran Markers en el mapa", () => {
    render(<BaseMap points={getPoints()} />);

    const markerElement = document.querySelector(".leaflet-marker-icon");
    expect(markerElement).toBeInTheDocument();
  });

  test("No hay filtros aplicados, no se muestra el botón de mostrar todo en el mapa", () => {
    const { container } = render(<BaseMap points={getPoints()} />);

    const showAllButton = container.querySelector("Mostrar todo");
    expect(showAllButton).not.toBeInTheDocument();
  });
});
