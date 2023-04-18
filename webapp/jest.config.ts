//const esModules = ['@react-leaflet', 'react-leaflet'].join('|');

export default {
  testEnvironment: "jsdom",
//   testEnvironmentOptions: {
//     "browsers": [
//       "chrome",
//       "firefox",
//       "safari"
//     ]
//   },
  //testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  preset: "ts-jest",

  collectCoverage: true,

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
