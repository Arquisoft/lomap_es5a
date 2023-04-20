export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },

  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  testMatch: ["<rootDir>src/components/**/?(*.)+(spec|test).[tj]s?(x)"],

  testEnvironment: "node",

  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],

  collectCoverage: true,

  coverageReporters: ["text", "lcov"],

  coveragePathIgnorePatterns: ["/dist/", "/node_modules/", "/test/", "/src/pages/", "/src/api/"],

  setupFiles: ["<rootDir>/src/setupTests.ts"],
};
