import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";

import getPoint from "../../mocks/point.mock";

import {addReviewPoint} from "../../api/point.api";
import { Review } from "../../shared/shareddtypes";

describe("AddNewReviewToPointPopup componente", () => {
  afterAll(cleanup);

  test("Renderiza el componente", () => {
    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={getPoint()} />
      </Router>
    );

    const popup = container.querySelector(
      ".add-new-review-point-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });

  test("Pulsar el botón de cerrar el popup", () => {
    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={getPoint()} />
      </Router>
    );

    const closeButton = container.querySelector(
      ".point-category-filter-popup__close-icon"
    );

    expect(closeButton).toBeInTheDocument();

    if (!closeButton) {
      return;
    }

    fireEvent.click(closeButton);

    waitFor(() => {
      const popup = container.querySelector(
        ".add-new-review-point-popup-container"
      );
      expect(popup).not.toBeInTheDocument();
    });
  });

  test("Evento onChange de los campos del formulario", () => {
    render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={getPoint()} />
      </Router>
    );

    const reviewTitleInput = screen.getByLabelText("Título");

    expect(reviewTitleInput).toBeInTheDocument();

    if (!reviewTitleInput) {
      return;
    }

    fireEvent.change(reviewTitleInput, { target: { value: "Test title" } });

    waitFor(() => {
      expect(jest.fn()).toHaveBeenCalled();
    });
  });

  test("Publicar una nueva valoración", () => {
    render(
      <Router>
        <AddNewReviewToPointPopup pointInfo={getPoint()} />
      </Router>
    );

    const reviewTitleInput = screen.getByLabelText("Título");

    expect(reviewTitleInput).toBeInTheDocument();

    if (!reviewTitleInput) {
      return;
    }

    fireEvent.change(reviewTitleInput, { target: { value: "Test title" } });

    const publishButton = screen.getByRole("button", {
      name: "Enviar valoración",
    });

    expect(publishButton).toBeInTheDocument();

    if (!publishButton) {
      return;
    }

    fireEvent.click(publishButton);

    waitFor(() => {
      // Comprobar que no se muestra el popup de publicación de la valoración
      // y se pasa a mostrar el popup de valoración publicada
      expect(screen.getByText("Añadir una valoración")).not.toBeInTheDocument();
      expect(screen.getByText("Máximo 100 caracteres")).not.toBeInTheDocument();
      expect(screen.getByText("Máximo 500 caracteres")).not.toBeInTheDocument();

      // Segundo popup, una vez se publica satisfactoriamente la valoración
    });
  });
});
