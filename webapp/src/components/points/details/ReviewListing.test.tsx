import { cleanup, render } from "@testing-library/react";
import ReviewListing from "./ReviewListing";

describe("ReviewListing", () => {
  afterAll(cleanup);
  it("renderiza la lista de reviews", () => {    
    const {container} = render(<ReviewListing />);

    const comp = container.querySelector(".review-listing-listReviews");
    expect(comp).toBeInTheDocument();
  });
});
