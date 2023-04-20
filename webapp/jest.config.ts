export default {
  clearMocks: true,

  transform: {
    "^.+\\.ts$": "ts-jest",
  },

  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],

  testMatch: ["<rootDir>/src/components/*.test.(ts|js)?(x)"],

  testEnvironment: "jsdom",

  collectCoverageFrom: ["<rootDir>/src/components/*.{js,jsx,ts,tsx}"],

  setupFiles: ["<rootDir>/jest.setup.ts"],
};
