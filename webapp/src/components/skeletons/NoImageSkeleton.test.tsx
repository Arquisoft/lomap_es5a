import { cleanup, screen, render } from "@testing-library/react";
import NoImageSkeleton from "./NoImageSkeleton";
import {MemoryRouter} from "react-router-dom";

describe("NoImageSkeleton component", () => {
  afterAll(cleanup);

  test("renders label and input", () => {
    render(
        <MemoryRouter>
            <NoImageSkeleton
            />
        </MemoryRouter>
    );

    const childComponent = screen.getByTestId("rounded-icon"); 
    expect(childComponent).toBeInTheDocument();
  });
});

