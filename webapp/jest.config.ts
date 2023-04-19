//const esModules = ['@react-leaflet', 'react-leaflet'].join('|');
// import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

// export default {
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.json",
//     },
//   },
//   transform: {
//     "^.+\\.ts$": "ts-jest",
//   },
//   // plugins: [
//   //   new NodePolyfillPlugin(),
//   // ],
//   testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
//   testEnvironment: "node",
//   moduleFileExtensions: ["ts", "js"],
//   collectCoverage: true,
//   coverageReporters: ["text", "lcov"],
//   coveragePathIgnorePatterns: ["/dist/", "/node_modules/", "/test/"],
//   setupFiles: ["./jest.setup.ts"],
// };

export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  testPathIgnorePatterns: ["/node_modules/", "/build/"],

  // This combination of preset/transformIgnorePatterns enforces that both TS and
  // JS files are transformed to CJS, and that the transform also applies to the
  // dependencies in the node_modules, so that ESM-only dependencies are supported.
  preset: "ts-jest/presets/js-with-ts",
  // deliberately set to an empty array to allow including node_modules when transforming code:
  transformIgnorePatterns: [],
  collectCoverage: true,
  coverageReporters: process.env.CI ? ["text", "lcov"] : ["text"],

  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/build"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
