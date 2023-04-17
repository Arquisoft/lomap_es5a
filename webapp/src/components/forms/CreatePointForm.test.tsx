import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import CreatePointForm from "./CreatePointForm";
import { BrowserRouter as Router } from "react-router-dom";
import CreatePointPage from "../../pages/point/CreatePointPage";

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
});