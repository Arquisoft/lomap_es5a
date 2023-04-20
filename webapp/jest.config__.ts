const esModules = ['@react-leaflet', 'react-leaflet'].join('|');

export default {
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.json",
  //   },
  // },

  transform: {
    "^.+\\.ts$": "ts-jest"
  },

  transformIgnorePatterns: [`/node_modules/(?!(react-leaflet))`],

  testPathIgnorePatterns: ["/node_modules/"],

  testMatch: ["<rootDir>/src/components/**/?(*.)+(spec|test).[tj]s?(x)"],

  testEnvironment: "node",

  setupFiles: ["<rootDir>/src/setupTests.ts"],
};
