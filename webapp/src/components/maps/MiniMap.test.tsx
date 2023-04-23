import { cleanup, render, screen } from "@testing-library/react";
import MiniMap from "./MiniMap";

describe("MiniMap component", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
      render(<MiniMap />);
      expect(screen.getByText("Leaflet")).toBeInTheDocument(); 
  });

});


