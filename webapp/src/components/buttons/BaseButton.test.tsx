import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import BaseButton from "./BaseButton";
import { MemoryRouter } from "react-router-dom";
import { VOID } from "@inrupt/vocab-common-rdf";

describe("BaseButton component", () => {

  afterAll(cleanup);
    
  it("renderiza correctamente", () => {
    render(
        <MemoryRouter>
            <BaseButton isLoading={true} isFinished={true} type={"button-blue"} text={""} onClick={() => VOID } />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("button"); 
    expect(styles).toBeInTheDocument();

    expect(styles.className).toBe("button-disabled");

    const labelName = screen.getByText("Cargando...");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza correctamente no cargando", () => {
    render(
        <MemoryRouter>
            <BaseButton isLoading={false} isFinished={true} type={"button-blue"} text={""} onClick={() => VOID } />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("button"); 
    expect(styles).toBeInTheDocument();

    expect(styles.className).toBe("button-blue");

    const labelName = screen.getByText("Finalizado");
    expect(labelName).toBeInTheDocument();
  });

  it("renderiza correctamente no cargando y no acabado", () => {
    render(
        <MemoryRouter>
            <BaseButton isLoading={false} isFinished={false} type={"button-blue"} text={"Test"} onClick={() => VOID } />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("button"); 
    expect(styles).toBeInTheDocument();

    expect(styles.className).toBe(`button-blue`);

    const labelName = screen.getByText("Test");
    expect(labelName).toBeInTheDocument();
  });
});
