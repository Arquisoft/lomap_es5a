export default {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },

  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  // testMatch: ["<rootDir>/src/components/**/?(*.)+(spec|test).[tj]s?(x)"],

  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
