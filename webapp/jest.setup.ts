import util from "util";

if (
  typeof globalThis.TextEncoder === "undefined" ||
  typeof globalThis.TextDecoder === "undefined"
) {
  globalThis.TextEncoder = new util.TextEncoder('utf-8');
  globalThis.TextDecoder = new util.TextDecoder('utf-8');
}
