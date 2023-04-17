//const esModules = ['@react-leaflet', 'react-leaflet'].join('|');

export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        
    },

    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],

    setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
}