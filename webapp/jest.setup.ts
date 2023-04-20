import { TextEncoder, TextDecoder } from "util";

if (
  typeof globalThis.TextEncoder === "undefined" ||
  typeof globalThis.TextDecoder === "undefined"
) {
  (globalThis as any).TextEncoder = TextEncoder;
  (globalThis as any).TextDecoder = TextDecoder;
  globalThis.Uint8Array = Uint8Array;
}

console.error("hello")
