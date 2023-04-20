import { cleanup, render, screen } from "@testing-library/react";
import SinglePointDetailBanner from "./SinglePointDetailBanner";

describe("SinglePointDetailBanner component", () => {
  afterAll(cleanup);

  const props = {
    pointImage: "",
    coords: {
      lat: 0,
      lng: 0,
    },
  };

  test("render banner image", () => {
    render(<SinglePointDetailBanner {...props} />);

    const bannerImage = screen.getByTestId("single-point-detail-banner-img");
    expect(bannerImage).toBeInTheDocument();
  });
});
