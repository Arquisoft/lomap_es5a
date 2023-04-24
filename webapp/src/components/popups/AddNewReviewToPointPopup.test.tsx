import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";

import getPoint from "./point_mock";

describe("AddNewReviewToPointPopup componente", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
    const myPoint = getPoint();

    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={myPoint} />
      </Router>
    );

    const popup = container.querySelector(
      ".add-new-review-point-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });
});
