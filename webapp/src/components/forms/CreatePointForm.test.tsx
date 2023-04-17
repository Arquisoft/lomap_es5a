import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import CreatePointForm from "./CreatePointForm";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import BaseButton from "../buttons/BaseButton";

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
    const form = shallow(
      <MemoryRouter>
        <CreatePointForm />
      </MemoryRouter>
    );

    // Seleccionar una categoria y comprobar que se muestra 
    const handleClick = jest.fn();
    const btPublicar = shallow((
      <BaseButton
      type="button-black"
      text="Publicar"
      loadingText="Publicando..."
      onClick={handleClick}
    />
    ));

    console.log("button: ", form.dive().children())
    
    const mainForm = form.find(CreatePointForm);
    console.log(mainForm);

    //expect(handleClick).toHaveBeenCalled();

    expect(screen.getByText(/El campo categoría del punto es obligatorio/i)).toBeInTheDocument();
  });
});
