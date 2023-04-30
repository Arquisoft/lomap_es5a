import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";
import getPoint from "../../mocks/point.mock";

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

    expect(screen.getByRole("form-group")).toBeInTheDocument();
    expect(screen.getByText("Añadir una valoración")).toBeInTheDocument();
    expect(screen.getByText("Puntuación para el punto de interés")).toBeInTheDocument();
    expect(screen.getByText("1 Star")).toBeInTheDocument();
    expect(screen.getByText("0.5 Stars")).toBeInTheDocument();
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
    expect(screen.getByRole("body")).toBeInTheDocument();
  });
});
