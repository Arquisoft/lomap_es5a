import { cleanup, render, screen } from "@testing-library/react";

import AccountNavMenu from "./AccountNavMenu";

import { BrowserRouter as Router } from "react-router-dom";

describe("AccountNavMenu component", () => {
  afterAll(cleanup);

  test("renders menu items", () => {
    render(
      <Router>
        <AccountNavMenu />
      </Router>
    );

    const menuItems = screen.getAllByRole("listitem");
    expect(menuItems).toHaveLength(3);
  });
});
