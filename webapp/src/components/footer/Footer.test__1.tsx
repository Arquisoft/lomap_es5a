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
    expect(new Date().getFullYear()).toBe(2023);
    const labelName = screen.getByText("© 2023 Lomap. Todos los Derechos Reservados.");
    expect(labelName).toBeInTheDocument();

    const labelName2 = screen.getByText(/Lomap_es5a/i);
    expect(labelName2).toBeInTheDocument();
  });
});
