import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Category, Point } from "../../shared/shareddtypes";
import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";

let points: Point[] = [];

const addPoints = () => {
  for (let i = 0; i < 2; i++) {
    points.push({
      _id: "c",
      name: "c",
      description: "c",
      location: {
        address: "c",
        postalCode: 0,
        city: "c",
        country: "c",
        coords: {
          lat: 42,
          lng: -4,
        },
      },
      owner: {
        webId: "c",
        name: "c",
        imageUrl: "c",
      },
      reviews: [],
      image: {
        url: "c",
        alt: "c",
      },
      isPublic: false,
      category: Category.NONE,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Point);
  }
};

describe("AddNewReviewToPointPopup componente", () => {
  beforeEach(() => {
    points = [];
    addPoints();
  });

  afterAll(cleanup);

  test("renderiza el componente", () => {
    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={points[0]} />
      </Router>
    );

    const popup = container.querySelector(
      ".add-new-review-point-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });
});
