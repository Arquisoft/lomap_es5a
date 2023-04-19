import { screen } from "@testing-library/dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import AddNewReviewToPointPopup from "./AddNewReviewToPointPopup";
import { shallow } from "enzyme";

const pointInitilization: Point = {
  _id: "a",
  name: "a",
  description: "a",
  location: {
    address: "a",
    postalCode: 0,
    city: "a",
    country: "a",
    coords: {
      lat: 43.362503991605806,
      lng: -5.8507845362433235,
    },
  },
  owner: {
    webId: "a",
    name: "a",
    imageUrl: "a",
  },
  reviews: [],
  image: {
    url: "a",
    alt: "a",
  },
  isPublic: false,
  category: Category.NONE,
  createdAt: new Date(),
  updatedAt: new Date(),
} as Point;

describe("AddNewReviewToPointPopup componente", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
    const { container } = render(
      <Router>
        <AddNewReviewToPointPopup 
          pointInfo={pointInitilization}
        />
      </Router>
    );

    const popup = container.querySelector(
      ".point-category-filter-popup-container"
    );
    expect(popup).toBeInTheDocument();
  });

  // test("cerrar el popup", () => {
  //   const mockClosePopup = jest.fn();

  //   jest.mock("../../store/point.store", () => ({
  //     usePointDetailsStore: () => ({
  //       setPointToShow: mockClosePopup,
  //     }),
  //   }));

  //   const { container } = render(
  //     <Router>
  //       <PointCategoryFilterPopup />
  //     </Router>
  //   );

  //   const popup = container.querySelector(
  //     ".add-new-review-point-popup-container"
  //   );

  //   expect(popup).toBeInTheDocument();

  //   const closeIconComp = document.querySelector(
  //     ".point-category-filter-popup__close-icon"
  //   );

  //   expect(closeIconComp).toBeInTheDocument();

  //   if (closeIconComp === null) {
  //     return;
  //   }

  //   fireEvent.click(closeIconComp);
  // });

  // test("Renderizar componente al añadir una nueva review", () => {
  //   const comp = shallow(
  //     <Router>
  //       <PointCategoryFilterPopup />
  //     </Router>
  //   );

  //   const popup = document.querySelector(
  //     ".add-new-review-point-popup-container"
  //   );

  //   expect(popup).toBeInTheDocument();

  //   const addNewReviewButton = document.querySelector(
  //     ".point-category-filter-popup__add-new-review-button"
  //   );

  //   if (addNewReviewButton === null) {
  //     return;
  //   }

  //   fireEvent.click(addNewReviewButton);

  //   const successDialog = document.querySelector(
  //     "add-new-review-point-popup__success-review"
  //   );

  //   if (successDialog === null) {
  //     return;
  //   }

  //   expect(comp.find(successDialog)).toBeInTheDocument();

  //   expect(popup).toBeInTheDocument();
  // });
});
