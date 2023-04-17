import { cleanup, render, screen } from "@testing-library/react";

// import UserAccountBanner from "./UserAccountBanner";
import { shallow } from "enzyme";

describe("UserAccountBanner component", () => {
  afterAll(cleanup);

  // test("render profile image empty", () => {
  //   const banner = shallow(
  //     <UserAccountBanner _className="test" imgBackground="" />
  //   );
  //   const bannerImage = banner.find("img");
  //   expect(bannerImage).toHaveLength(0);
  // });

  // test("render profile image with url", () => {
  //   const banner = shallow(
  //     <UserAccountBanner
  //       _className="test"
  //       imgBackground="https://pruebasolid2.solidcommunity.net/profile/91.jpg"
  //     />
  //   );
  //   const bannerImage = banner.find("img");
  //   expect(bannerImage).toHaveLength(1);
  // });
});
