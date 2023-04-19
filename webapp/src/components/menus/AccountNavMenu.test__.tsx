import { cleanup, render, screen } from "@testing-library/react";

import AccountNavMenu from "./AccountNavMenu";

describe("AccountNavMenu component", () => {
  afterAll(cleanup);

  test("renders menu items", () => {
    render(<AccountNavMenu />);

    const menuItems = screen.getAllByRole("listitem");
    expect(menuItems).toHaveLength(3);
  });
});
