import { cleanup, render, screen } from "@testing-library/react";
import PointListingAside from "./PointListingAside";
import { BrowserRouter as Router } from "react-router-dom";

import getPoints from "./points_mock";

describe("PointListingAside component", () => {
  afterAll(cleanup);

  it("renderiza correctamente", () => {
    const { container } = render(
      <Router>
        <PointListingAside points={getPoints()} />
      </Router>
    );

    const comp = container.querySelector(".point-listing-aside-container");
    expect(comp).toBeInTheDocument();

    const labelName = screen.getByText("Puntos de interés recientes");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza puntos con un punto sin imagen", () => {
    // if (getPoints().length > 0 && getPoints()[0].image) {
    //   getPoints()[0].image.url = "";
    // }

    const { container } = render(
      <Router>
        <PointListingAside points={getPoints()} />
      </Router>
    );

    const summaries = container.children[0].classList.contains(
      "point-listing-aside-container"
    );
    expect(summaries).toBeTruthy();
  });

  it("renderiza puntos con un punto sin usuario", () => {
    if (getPoints()[0].owner) {
      getPoints()[0].owner.name = "";
    }

    const { container } = render(
      <Router>
        <PointListingAside points={getPoints()} />
      </Router>
    );
    const summaries = container.children[0].classList.contains(
      "point-listing-aside-container"
    );
    expect(summaries).toBeTruthy();
  });
});
