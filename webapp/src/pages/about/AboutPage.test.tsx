import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./AboutPage";

const HEADING_TEXT: string = "Acerca de";
const SLOGAN_TEXT: string = "Descubre nuevos lugares, comparte y más";

test("About Page", () => {
  it("Page heading appears on the page", () => {
    const { getByText } = render(<AboutPage />);
    const headingElement = getByText(HEADING_TEXT);
    expect(headingElement).toBeInTheDocument();
  });

  it("Page slogan appears on the page", () => {
    const { getByText } = render(<AboutPage />);
    const sloganElement = getByText(SLOGAN_TEXT);
    expect(sloganElement).toBeInTheDocument();
  });
});
