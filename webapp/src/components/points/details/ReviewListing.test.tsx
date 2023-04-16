import ReviewListing from "./ReviewListing";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";
import { Category, Point } from "../../../shared/shareddtypes";

describe("ReviewListing", () => {
  afterAll(cleanup);
  it("renderiza la lista de reviews", () => {
    const point = {
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
      } as Point;

    const wrapper = shallow(<ReviewListing />);

    expect(wrapper.find(".review-listing-listReviews")).toHaveLength(1);
    expect(wrapper.find("SingleReview")).toHaveLength(0);
  });
});
