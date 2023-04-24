import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import { Category } from "../../../shared/shareddtypes";

import React from "react";
import BaseMapPopup from "./BaseMapPopup";

describe("Base map popup component", () => {
  afterAll(cleanup);

  test("render component", () => {
    const { container } = render(
      <Router>
        <BaseMapPopup
          name=""
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "",
            postalCode: 1000,
            city: "",
            country: "",
          }}
          image={""}
          owner={{
            webId: "",
            name: "",
            imageUrl: "",
          }}
          category={Category.NONE}
          point={undefined}
        />
      </Router>
    );

    const comp = container.querySelector(".base-popup-modal");
    expect(comp).toBeInTheDocument();
  });

  test("Mostrar etiqueta de categoria al pasar cursor por imagen", () => {
    const { container } = render(
      <Router>
        <BaseMapPopup
          name="a"
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "a",
            postalCode: 1000,
            city: "a",
            country: "a",
          }}
          image={"a"}
          owner={{
            webId: "a",
            name: "a",
            imageUrl: "a",
          }}
          category={Category.NONE}
          point={undefined}
        />
      </Router>
    );

    // Simular hover sobre la imagen
    const img = container.querySelector(".base-popup-modal__head");
    if (!img) {
      return;
    }
    fireEvent.mouseOver(img);

    const badge = container.querySelector(".base-badge");
    expect(badge).toBeInTheDocument();
  });

  test("Guardar el punto", () => {
    const savePointMockFunction = jest.fn();

    render(
      <Router>
        <BaseMapPopup
          name="a"
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "a",
            postalCode: 1000,
            city: "a",
            country: "a",
          }}
          image={"a"}
          owner={{
            webId: "a",
            name: "a",
            imageUrl: "a",
          }}
          category={Category.NONE}
          point={undefined}
        />
      </Router>
    );

    // Simular click en el botón de guardar
    const button = screen.getByTestId("save-point-button");
    fireEvent.click(button);

    waitFor(() => {
      expect(savePointMockFunction).toHaveBeenCalled();
    });
  });

  test("Eliminar el punto de guardados", () => {
    const deletePointMockFunction = jest.fn();

    render(
      <Router>
        <BaseMapPopup
          name="a"
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "a",
            postalCode: 1000,
            city: "a",
            country: "a",
          }}
          image={"a"}
          owner={{
            webId: "a",
            name: "a",
            imageUrl: "a",
          }}
          category={Category.NONE}
          point={undefined}
        />
      </Router>
    );

    // Simular click en el botón de guardar
    const button = screen.getByTestId("save-point-button");
    fireEvent.click(button);

    waitFor(() => {
      // A continuacion, pulsar el icono de nuevo para eliminarlo de favoritos
      const button = screen.getByTestId("unsave-point-button");
      fireEvent.click(button);
      waitFor(() => {
        expect(deletePointMockFunction).toHaveBeenCalled();
      });
    });
  });

  test("Ver detalles del punto", () => {
    render(
      <Router>
        <BaseMapPopup
          name="foo"
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "c",
            postalCode: 2000,
            city: "c",
            country: "c",
          }}
          image={"c"}
          owner={{
            webId: "c",
            name: "c",
            imageUrl: "c",
          }}
          category={Category.NONE}
          point={undefined}
        />
      </Router>
    );

    // Simular click en el botón de guardar
    const button = screen.getByText("Ver punto");
    fireEvent.click(button);

    waitFor(() => {
      // Comprobar que se redirecciona a la página de detalle
      expect(jest.fn).toHaveBeenCalled();
      expect(window.location.pathname).toBe("/points/foo");
    });
  });

  test("Comprobar si el punto está guardado - useEffect", () => {
    const useStateSpy = jest.spyOn(React, "useEffect");
    useStateSpy.mockImplementation((f) => f());

    render(
      <Router>
        <BaseMapPopup
          name="d"
          location={{
            coords: {
              lat: 0,
              lng: 0,
            },
            address: "d",
            postalCode: 2000,
            city: "d",
            country: "d",
          }}
          image={"d"}
          owner={{
            webId: "d",
            name: "d",
            imageUrl: "d",
          }}
          category={Category.BAR}
          point={undefined}
        />
      </Router>
    );

    waitFor(() => {
      expect(useStateSpy).toHaveBeenCalled();
    });
  });
});
