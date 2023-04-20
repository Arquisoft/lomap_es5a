import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Category, Point } from "../../shared/shareddtypes";
import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";

const pointDemo1: Point = {
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

describe("AddNewReviewToPointPopup componente", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={pointDemo1} />
      </Router>
    );

    const popup = container.querySelector(
      ".add-new-review-point-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });
});
