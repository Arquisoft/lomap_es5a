import { screen } from "@testing-library/dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PointCategoryFilterPopup from "./PointCategoryFilterPopup";

describe("PointCategoryFilterPopup componente", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
    render(
      <Router>
        <PointCategoryFilterPopup />
      </Router>
    );

    const popup = document.querySelector(
      ".point-category-filter-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });

  test("cerrar el popup", () => {
    const mockClosePopup = jest.fn();

    jest.mock("../../store/point.store", () => ({
      usePointDetailsStore: () => ({
        setPointToShow: mockClosePopup,
      }),
    }));

    render(
      <Router>
        <PointCategoryFilterPopup />
      </Router>
    );

    const popup = document.querySelector(
      ".point-category-filter-popup-container"
    );

    expect(popup).toBeInTheDocument();

    const closeIconComp = screen.getByTestId("close-popup-button");

    expect(closeIconComp).toBeInTheDocument();

    if (closeIconComp === null) {
      return;
    }

    fireEvent.click(closeIconComp);
  });
});
