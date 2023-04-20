import { cleanup, screen, render } from "@testing-library/react";
import NoImageSkeleton from "./NoImageSkeleton";
import {MemoryRouter} from "react-router-dom";

describe("NoImageSkeleton component", () => {
  afterAll(cleanup);

  test("Valor de borderRadius si isRadius es false", () => {
    render(
        <MemoryRouter>
            <NoImageSkeleton
            />
        </MemoryRouter>
    );

    const styles = screen.getByTestId("skeleton"); 
    expect(styles.style.borderRadius).toBe('8px');

    const childComponent = screen.getByTestId("rounded-icon"); 
    expect(childComponent).toBeInTheDocument();
  });

  test("Valor de borderRadius si isRadius es true", () => {
    render(
      <MemoryRouter>
          <NoImageSkeleton isRound={true}
          />
      </MemoryRouter>
    );

    const styles = screen.getByTestId("skeleton"); 
    expect(styles.style.borderRadius).toBe('50%');

    const childComponent = screen.getByTestId("rounded-icon"); 
    expect(childComponent).toBeInTheDocument();
  });

});


