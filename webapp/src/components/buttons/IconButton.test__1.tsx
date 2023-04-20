import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import { MemoryRouter } from "react-router-dom";

describe("IconButton component", () => {

  afterAll(cleanup);
    
  it("renderiza correctamente", () => {
    render(
        <MemoryRouter>
            <IconButton type={"type"} text={"text"} muaIconName={"name"} mode="mode"  />
        </MemoryRouter>
    );
    const styles = screen.getByTestId("icon"); 
    expect(styles).toBeInTheDocument();

    expect(styles.className).toBe("icon-button type mode");
  });

});
