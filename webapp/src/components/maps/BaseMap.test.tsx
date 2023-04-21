import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

import { Category, Point } from "../../shared/shareddtypes";
import BaseMap from "./BaseMap";

let points: Point[] = [];

const addPoints = () => {
  for (let i = 0; i < 2; i++) {
    points.push({
      _id: i + "___",
      name: "a",
      description: "a",
      location: {
        address: "a",
        postalCode: 0,
        city: "a",
        country: "a",
        coords: {
          lat: 43.362503991605806,
          lng: -5.8507845362433235,
        },
      },
      owner: {
        webId: "a",
        name: "a",
        imageUrl: "a",
      },
      reviews: [],
      image: {
        url: "a",
        alt: "a",
      },
      isPublic: false,
      category: Category.NONE,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Point);
  }
};

describe("BaseMap component", () => {
  beforeEach(() => {
    points = [];
    addPoints();
  });

  afterAll(cleanup);

  test("renders map", () => {
    render(<BaseMap points={points} />);

    const mapElement = document.querySelector(".leaflet-container");
    expect(mapElement).toBeInTheDocument();
  });

  test("Simular doble click mapa, se muestra alerta", () => {

    // Alerta de confirmación
    jest.spyOn(window, 'alert').mockImplementation(() => {
      return true;
    });

    const { container } = render(<BaseMap points={points} />);

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
    render(<BaseMap points={points} />);

    const markerElement = document.querySelector(".leaflet-marker-icon");
    expect(markerElement).toBeInTheDocument();
  });

  test("No hay filtros aplicados, no se muestra el botón de mostrar todo en el mapa", () => {
    const {container} = render(<BaseMap points={points} />);

    const showAllButton = container.querySelector("Mostrar todo");
    expect(showAllButton).not.toBeInTheDocument();
  });
});
