import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import {MemoryRouter} from "react-router-dom";

describe("Footer component", () => {
  afterAll(cleanup);

  test("renders label and input", () => {
    render(
        <MemoryRouter>
            <Footer
            />
        </MemoryRouter>
    );
    const labelName = screen.getByText(/Todos los Derechos Reservados./i);
    expect(labelName).toBeInTheDocument();
  });
});
