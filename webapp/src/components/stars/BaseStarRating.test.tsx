import { cleanup, render, screen } from "@testing-library/react";
import BaseStarRating from "./BaseStarRating";

describe("BaseStarRating component", () => {
  afterAll(cleanup);

  test("renders rating", () => {
    const rating = 3.5;

    const { getByText } = render(<BaseStarRating rating={rating} />);

    const ratingElement = getByText(/1\.5 Stars/i);
    expect(ratingElement).toBeInTheDocument();
  });

  test("changes rating", () => {
    const rating = 3.5;
    const handleChangeRating = jest.fn();

    const { getByText } = render(
        <BaseStarRating rating={rating} handleChangeRating={handleChangeRating} />
    );

    handleChangeRating.mockReturnValue(4.5);

    const ratingElement = getByText(/4\.5 Stars/i);

    expect(ratingElement).toBeInTheDocument();

  });
});
