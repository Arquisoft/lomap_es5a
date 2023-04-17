import { cleanup, screen, render } from "@testing-library/react";
import AppLogo from "./AppLogo";
import {MemoryRouter} from "react-router-dom";

describe("AppLogo component", () => {
  afterAll(cleanup);

  test("renderiza el componente con fill", () => {
    render(
        <MemoryRouter>
            <AppLogo fill="#FFFFFF"
            />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("logo"); 
    expect(styles).toBeInTheDocument();
  });

  test("renderiza el componente sin fill", () => {
    render(
        <MemoryRouter>
            <AppLogo
            />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("logo"); 
    expect(styles).toBeInTheDocument();
  });

});


