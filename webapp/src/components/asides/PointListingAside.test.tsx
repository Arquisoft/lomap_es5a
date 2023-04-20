import { cleanup, render, screen } from "@testing-library/react";

import PointListingAside from "./PointListingAside";
import { Category, Point } from "../../shared/shareddtypes";
import { shallow } from "enzyme";
import PointSummaryCard from "../cards/PointSummaryCard";

import { Router } from "react-router-dom";

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

const pointDemo2: Point = {
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

describe("PointListingAside component", () => {
  afterAll(cleanup);

  it("renderiza correctamente", () => {
    render(<PointListingAside points={[pointDemo1, pointDemo2]} />);

    const styles = document.querySelector(".point-listing-aside-container");
    expect(styles).toBeInTheDocument();

    const labelName = screen.getByText("Puntos de interés recientes");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza correctamente con puntos", () => {
    const points: Point[] = [pointDemo1, pointDemo2];

    const comp = render(
      <Router>
        <PointListingAside points={points} />
      </Router>
    );

    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });

  it("renderiza puntos con un punto sin imagen", () => {
    const points: Point[] = [pointDemo1, pointDemo2];

    if (points.length > 0 && points[0].image && points[0].image.url) {
      points[0].image.url = "";
    }

    const comp = shallow(<PointListingAside points={points} />);
    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });

  it("renderiza puntos con un punto sin usuario", () => {
    const points: Point[] = [pointDemo1, pointDemo2];

    if (points[0].owner) {
      points[0].owner.name = "";
    }

    const comp = shallow(<PointListingAside points={points} />);
    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });
});
