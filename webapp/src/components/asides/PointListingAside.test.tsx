import { cleanup, render, screen } from "@testing-library/react";

import PointListingAside from "./PointListingAside";
import { Category, Point } from "../../shared/shareddtypes";
import { shallow } from "enzyme";
import PointSummaryCard from "../cards/PointSummaryCard";

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

describe("PointListingAside component", () => {
  afterAll(cleanup);

  it("renderiza correctamente", () => {
    render(<PointListingAside points={[]} />);

    const styles = document.querySelector(".point-listing-aside-container");
    expect(styles).toBeInTheDocument();

    const labelName = screen.getByText("Puntos de interés recientes");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza correctamente con puntos", () => {
    const points: Point[] = [pointInitilization, pointInitilization];

    const comp = shallow(<PointListingAside points={points} />);
    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });

  it("renderiza puntos con un punto sin imagen", () => {
    const points: Point[] = [pointInitilization, pointInitilization];

    if (points[0].image) {
      points[0].image.url = "";
    }

    const comp = shallow(<PointListingAside points={points} />);
    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });

  it("renderiza puntos con un punto sin usuario", () => {
    const points: Point[] = [pointInitilization, pointInitilization];

    if (points[0].owner) {
      points[0].owner.name = "";
    }

    const comp = shallow(<PointListingAside points={points} />);
    const summaries = comp.find(PointSummaryCard);
    expect(summaries).toHaveLength(2);
  });
});
