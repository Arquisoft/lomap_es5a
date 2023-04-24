import { cleanup, render, screen } from "@testing-library/react";

import { shallow } from "enzyme";
import { Category, Point } from "../../shared/shareddtypes";
import PointSummaryCard from "../cards/PointSummaryCard";
import PointListingAside from "./PointListingAside";

import { BrowserRouter as Router } from "react-router-dom";

let points: Point[] = [];

const addPoints = () => {
  for (let i = 0; i < 2; i++) {
    points.push({
      _id: i + "_",
      name: "b",
      description: "b",
      location: {
        address: "b",
        postalCode: 0,
        city: "b",
        country: "b",
        coords: {
          lat: 0,
          lng: 0,
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
      isOwner: false,
      category: Category.NONE,
      createdAt: new Date(),
      updatedAt: new Date(),
      friends: []
    } as Point);
  }
};

describe("PointListingAside component", () => {
  beforeEach(() => {
    points = [];
    addPoints();
  });

  afterAll(cleanup);

  it("renderiza correctamente", () => {
    const { container } = render(
      <Router>
        <PointListingAside points={points} />
      </Router>
    );

    const comp = container.querySelector(".point-listing-aside-container");
    expect(comp).toBeInTheDocument();

    const labelName = screen.getByText("Puntos de interés recientes");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza puntos con un punto sin imagen", () => {
    if (points.length > 0 && points[0].image && points[0].image.url) {
      points[0].image.url = "";
    }

    const { container } = render(
      <Router>
        <PointListingAside points={points} />
      </Router>
    );

    const summaries = container.children[0].classList.contains(
      "point-listing-aside-container"
    );
    expect(summaries).toBeTruthy();
  });

  it("renderiza puntos con un punto sin usuario", () => {
    if (points[0].owner) {
      points[0].owner.name = "";
    }

    const { container } = render(
      <Router>
        <PointListingAside points={points} />
      </Router>
    );
    const summaries = container.children[0].classList.contains(
      "point-listing-aside-container"
    );
    expect(summaries).toBeTruthy();
  });
});
