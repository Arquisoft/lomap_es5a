import ReviewListing from "./ReviewListing";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

describe("ReviewListing", () => {
  afterAll(cleanup);
  it("renderiza la lista de reviews", () => {    
    const wrapper = shallow(<ReviewListing />);

    expect(wrapper.find(".review-listing-listReviews")).toHaveLength(1);
    expect(wrapper.find("SingleReview")).toHaveLength(0);
  });
});
