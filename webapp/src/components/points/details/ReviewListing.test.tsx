import ReviewListing from "./ReviewListing";
import { shallow } from "enzyme";
import { cleanup, render, screen } from "@testing-library/react";

describe("ReviewListing", () => {
  afterAll(cleanup);
  it("renderiza la lista de reviews", () => {    
    const {container} = render(<ReviewListing />);

    const comp = container.querySelector(".review-listing-listReviews");
    expect(comp).toBeInTheDocument();
  });
});
