import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import PointSummaryCard from "./PointSummaryCard";

import { BrowserRouter as Router } from "react-router-dom";
import { Category, Point } from "../../shared/shareddtypes";

import getPoint from "../../mocks/point.mock";

describe("PointSummaryCard component", () => {
  beforeAll(() => {
    const mockedUsedNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockedUsedNavigate,
    }));
  });

  afterAll(cleanup);

  test("render name, user and date", () => {
    render(
      <Router>
        <PointSummaryCard
          imgUrl="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
          pointName="Point name"
          pointUser="Point user"
          pointCreatedAt="01:40"
          pointInfo={getPoint()}
        />
      </Router>
    );
    expect(screen.getByText("Point name")).toBeInTheDocument();
    expect(screen.getByText("Point user")).toBeInTheDocument();
    expect(screen.getByText("01:40")).toBeInTheDocument();
  });

  test("is image rendered", () => {
    render(
      <Router>
        <PointSummaryCard
          imgUrl="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
          pointName="Point name"
          pointUser="Point user"
          pointCreatedAt="Point created at"
          pointInfo={getPoint()}
        />
      </Router>
    );
    const img = document.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  test("render point summary card with point image", () => {
    render(
      <Router>
        <PointSummaryCard
          imgUrl="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
          pointName="Point name"
          pointUser="Point user"
          pointCreatedAt="12/12/2022"
          pointInfo={getPoint()}
        />
      </Router>
    );
    const img = document.querySelector("img");
    expect(img?.src).toBe(
      "https://pruebasolid2.solidcommunity.net/profile/91.jpg"
    );
  });

  test("render point summary card without point image", () => {
    render(
      <Router>
        <PointSummaryCard
          imgUrl=""
          pointName="Point name"
          pointUser="Point user"
          pointCreatedAt="Point created at"
          pointInfo={getPoint()}
        />
      </Router>
    );

    const img = document.querySelector("img");
    expect(img?.src).not.toBe(
      "https://pruebasolid2.solidcommunity.net/profile/91.jpg"
    );
  });

  it("click on point summary card", () => {
    const { container } = render(
      <Router>
        <PointSummaryCard
          imgUrl="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
          pointName="Point name"
          pointUser="Point user"
          pointCreatedAt="Point created at"
          pointInfo={getPoint()}
        />
      </Router>
    );

    const pointSummaryCard = container.querySelector(
      ".point-summary-card-container"
    );

    expect(pointSummaryCard).not.toBeNull();

    if (pointSummaryCard === null) {
      return;
    }

    fireEvent.click(pointSummaryCard);

    waitFor(() => {
      expect(window.location.pathname).toBe("/points/point-name");
    });
  });

  test("click on point summary card without point info", () => {
    const mockNavigate = jest.fn();
    const mockSetPointToShow = jest.fn();

    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    jest.mock("../../store/point.store", () => ({
      usePointDetailsStore: () => ({
        setPointToShow: mockSetPointToShow,
      }),
    }));

    const { container } = render(
      <Router>
        <PointSummaryCard
          imgUrl="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
          pointName=""
          pointUser="Point user"
          pointCreatedAt="Point created at"
          pointInfo={{} as Point}
        />
      </Router>
    );

    const pointSummaryCard = container.querySelector(
      ".point-summary-card-container"
    );

    fireEvent.click(pointSummaryCard as Element);

    expect(mockSetPointToShow).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
