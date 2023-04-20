import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { MapContainer } from "react-leaflet";
import MiniMap from "./MiniMap";

describe("MiniMap component", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
      const wrapper = shallow(<MiniMap />);
      const childWrapper = wrapper.find(MapContainer);
      expect(childWrapper).toBeInTheDocument(); 
  });

});


