import { cleanup, render } from "@testing-library/react";

import { Category, Point } from "../../shared/shareddtypes";
import BaseMap from "./BaseMap";

let points: Point[] = [];

const addPoints = () => {
  for (let i = 0; i < 2; i++) {
    points.push({
      _id: "a",
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
});
