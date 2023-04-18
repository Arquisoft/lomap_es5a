import { cleanup, screen, render } from "@testing-library/react";
import MiniMap from "./MiniMap";
import {MemoryRouter} from "react-router-dom";
import { shallow } from "enzyme";
import { MapContainer, TileLayer } from "react-leaflet";

describe("MiniMap component", () => {
  afterAll(cleanup);

  test("renderiza el componente", () => {
      const wrapper = shallow(<MiniMap />);
      const childWrapper = wrapper.find(MapContainer);
      expect(childWrapper).toBeInTheDocument(); 
  });

});


