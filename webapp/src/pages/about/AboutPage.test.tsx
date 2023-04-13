import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import { ABOUT_PATH } from "../../routes";

const HEADING_TEXT = "Acerca de";
const SLOGAN_TEXT = "Descubre nuevos lugares, comparte y más";

describe("About Page", () => {
  it("Page heading appears on the page", () => {
    render(
      <MemoryRouter initialEntries={[ABOUT_PATH]}>
        <AboutPage />
      </MemoryRouter>
    );
    const pageTitle = screen.getByRole("heading", { name: HEADING_TEXT });
    expect(pageTitle).toBeInTheDocument();
  }, 5000);

    it("Page slogan appears on the page", () => {
      render(
        <MemoryRouter initialEntries={[ABOUT_PATH]}>
          <AboutPage />
        </MemoryRouter>
      );
      const pageTitle = screen.getByRole("heading", { name: SLOGAN_TEXT });
      expect(pageTitle).toBeInTheDocument();
    }, 5000);
});
