import "@testing-library/jest-dom/extend-expect";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { TextDecoder, TextEncoder } from "util";

if (
  typeof globalThis.TextEncoder === "undefined" ||
  typeof globalThis.TextDecoder === "undefined"
) {
  (globalThis as any).TextEncoder = TextEncoder;
  (globalThis as any).TextDecoder = TextDecoder;
  globalThis.Uint8Array = Uint8Array;
}

Enzyme.configure({ adapter: new Adapter() });
