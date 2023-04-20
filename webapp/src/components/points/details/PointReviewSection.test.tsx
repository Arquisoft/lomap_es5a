import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { Category } from "../../../shared/shareddtypes";
import BaseStarRating from "../../stars/BaseStarRating";
import PointReviewSection from "./PointReviewSection";
import PointReviewSummary from "./review/PointReviewSummary";

describe("PointReviewSection", () => {
  afterAll(cleanup);
  it("renders", () => {
    const point = {
      pointToShow: {
        _id: "",
        name: "",
        description: "",
        location: {
          address: "",
          postalCode: 0,
          city: "",
          country: "",
          coords: {
            lat: 43.362503991605806,
            lng: -5.8507845362433235,
          },
        },
        owner: {
          webId: "",
          name: "",
          imageUrl: "",
        },
        reviews: [],
        image: {
          url: "",
          alt: "",
        },
        isPublic: false,
        category: Category.NONE,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
    const wrapper = shallow(<PointReviewSection {...point} />);
    expect(wrapper.find("h2").text()).toEqual("Valoraciones");
    expect(wrapper.find(".point-review-section-review-summary").exists()).toBe(
      true
    );
    expect(wrapper.find("p").text()).toEqual(" 0 valoraciones");
  });

  it("comprobaciones reviews", () => {
    const point2 = {
      pointToShow: {
        _id: "",
        name: "",
        description: "",
        location: {
          address: "",
          postalCode: 0,
          city: "",
          country: "",
          coords: {
            lat: 43.362503991605806,
            lng: -5.8507845362433235,
          },
        },
        owner: {
          webId: "",
          name: "",
          imageUrl: "",
        },
        reviews: [
          {
            _id: "cd9fdb8f-02e6-4a51-ad81-d0916f2ee9ab",
            title: "ad eu ut adipisicing aliqua sint tempor in",
            comment:
              "anim commodo et sit aliqua pariatur incididunt mollit non duis pariatur ad laborum nostrud adipisicing nostrud dolor officia do duis aliquip dolore eu nulla duis do veniam est in dolore reprehenderit cillum exercitation voluptate labore nisi duis amet proident duis excepteur sit culpa sit sit commodo consectetur exercitation irure do qui sint cupidatat sit id culpa aliqua sit qui tempor aliquip cillum velit nisi ex voluptate nisi eu adipisicing qui et excepteur sunt sunt sint esse nisi irure dolor adipisicing proident officia sunt Lorem aliqua non dolore eu ut nisi quis qui do sit aute magna",
            reviewer: {
              webId: "",
              name: "",
              imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            rating: 1,
            createdAt: new Date(),
          },
        ],
        image: {
          url: "",
          alt: "",
        },
        isPublic: false,
        category: Category.NONE,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    const wrapper = shallow(<PointReviewSection {...point2} />);
    expect(wrapper.find("h2").text()).toEqual("Valoraciones");
    expect(wrapper.find(".point-review-section-review-summary").exists()).toBe(
      true
    );
    expect(wrapper.find(PointReviewSummary).prop("media")).toEqual(1);
    expect(wrapper.find("p").text()).toEqual(" 1 valoraciones");
    expect(wrapper.find(BaseStarRating).prop("rating")).toEqual("1.0");
  });
});
