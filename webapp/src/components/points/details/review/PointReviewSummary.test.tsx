import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { ceilNumber } from "../../../../utils/numberUtils";
import PointReviewSummary from "./PointReviewSummary";

describe("PointReviewSummary", () => {
  afterAll(cleanup);
  it("render", () => {
    const props = {
      media: 3.75,
    };
    const wrapper = shallow(<PointReviewSummary {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it("comprobaciones extra", () => {
    const props = {
      media: 3.75,
    };
    const wrapper = shallow(<PointReviewSummary {...props} />);
    const mediaContainer = wrapper.find(
      ".point-review-summary-container-media"
    );
    const expectedMedia = ceilNumber(props.media, 1);
    expect(mediaContainer.text()).toEqual(expectedMedia.toString());
  });
});
