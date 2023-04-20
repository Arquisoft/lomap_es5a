import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import BaseFilterBar from "./BaseFilterBar";

describe("BaseFilterBar component", () => {
  afterAll(cleanup);

  test("is filter button rendered", () => {
    render(<BaseFilterBar />);
    expect(screen.getByText("Filtros")).toBeInTheDocument();
  });

  test("is filter button clicked", () => {
    const { getByText } = render(<BaseFilterBar />);
    fireEvent.click(getByText("Filtros"));
    waitFor(() => {
      expect(getByText("Filtros")).toBeInTheDocument();
    });
  });
});
