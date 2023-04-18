import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import SinglePopupFilter from "./SinglePopupFilter";
import { Category, SingleCategory } from "../../shared/shareddtypes";

const mockValidFilterObject: SingleCategory = {
  id: "cat-1",
  code: Category.RESTAURANT,
  name: "Restaurantes",
  description: "Mostrar los restaurantes",
  icon: "restaurant",
};

const mockInvalidFilterObject: SingleCategory = {
  id: "cat-0",
  code: "foo",
  name: "",
  description: "",
  icon: "",
};

describe("SinglePopupFilter component", () => {
  afterAll(cleanup);

  test("is filter button rendered", () => {
    render(
      <SinglePopupFilter
        code={mockValidFilterObject.code}
        iconFilename="filter_alt"
        text="Filtros"
        filterObject={mockValidFilterObject}
      />
    );
    expect(screen.getByText("Filtros")).toBeInTheDocument();
  });

  test("is filter button clicked", async () => {
    const { getByText } = render(
      <SinglePopupFilter
        code={mockValidFilterObject.code}
        iconFilename="filter_alt"
        text="Filtros"
        filterObject={mockValidFilterObject}
      />
    );
    fireEvent.click(getByText("Filtros"));
    await waitFor(() => {
      expect(getByText("Filtros")).toBeInTheDocument();
    });
  });
});
