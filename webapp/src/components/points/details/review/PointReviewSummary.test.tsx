import React from "react";
import { shallow } from "enzyme";
import PointReviewSummary from "./PointReviewSummary";
import { ceilNumber } from "../../../../utils/numberUtils";
import { cleanup } from "@testing-library/react";

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
    const mediaContainer = wrapper.find(".point-review-summary-container-media");
    const expectedMedia = ceilNumber(props.media, 0);
    expect(mediaContainer.text()).toEqual(expectedMedia.toString()+" ");
  });
});
