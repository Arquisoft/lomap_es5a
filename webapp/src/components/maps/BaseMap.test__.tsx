import { cleanup, render, screen } from "@testing-library/react";

import BaseMap from "./BaseMap";
import { Category, Point } from "../../shared/shareddtypes";

const pointInitilization: Point = {
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
} as Point;

describe("BaseMap component", () => {
  afterAll(cleanup);

  test("renders map", () => {
    render(<BaseMap points={[pointInitilization, pointInitilization]} />);

    const mapElement = document.querySelector(".leaflet-container");
    expect(mapElement).toBeInTheDocument();
  });
});
