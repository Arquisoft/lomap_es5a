//const esModules = ['@react-leaflet', 'react-leaflet'].join('|');
// import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  // plugins: [
  //   new NodePolyfillPlugin(),
  // ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  coveragePathIgnorePatterns: ["/dist/", "/node_modules/", "/test/"],
  setupFiles: ["./jest.setup.ts"],
};
