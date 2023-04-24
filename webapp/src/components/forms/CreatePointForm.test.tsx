import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import CreatePointForm from "./CreatePointForm";


describe("Create Point Form component", () => {
  afterAll(cleanup);

  test("renders form inputs", () => {
    const { container } = render(
      <Router>
        <CreatePointForm />
      </Router>
    );
    expect(container).toBeInTheDocument();

    // Campo nombre
    const labelName = screen.getByLabelText("Nombre (*)");
    expect(labelName).toBeInTheDocument();

    const labelDescription = screen.getByLabelText("Descripción");
    expect(labelDescription).toBeInTheDocument();

    const labelDirection = screen.getByLabelText("Dirección postal");
    expect(labelDirection).toBeInTheDocument();

    const labelCategory = screen.getByLabelText("Categoría (*)");
    expect(labelCategory).toBeInTheDocument();

    // Seleccionar una categoria y comprobar que se muestra
    fireEvent.change(screen.getByLabelText("Categoría (*)"), {
      target: { value: "shop" },
    });

    expect(screen.getByText("Tiendas")).toBeInTheDocument();
  });

  test("no select any category", () => {
    render(
      <Router>
        <CreatePointForm />
      </Router>
    );

      // Rellenar el campo nombre
    fireEvent.change(screen.getByLabelText("Nombre (*)"), {
      target: { value: "Punto de prueba" },
    });

    expect(screen.getByLabelText("Nombre (*)")).toHaveValue("Punto de prueba");

    fireEvent.click(screen.getByText("Publicar"));

    waitFor(() => {
      // Comprobar que se muestra el error
      expect(
        screen.getByText("El campo categoría del punto es obligatorio")
      ).toBeInTheDocument();
    });
  });
});