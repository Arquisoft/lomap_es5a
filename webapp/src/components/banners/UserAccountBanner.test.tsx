import { cleanup, render, screen } from "@testing-library/react";

import UserAccountBanner from "./UserAccountBanner";
import { shallow } from "enzyme";

describe("UserAccountBanner component", () => {
  afterAll(cleanup);

  // test("render image", () => {
  //   const banner = shallow(<UserAccountBanner _className="test" imgBackground="" />);
  //   const bannerImage = banner.find("img");
  // });
});
