import { TextEncoder } from 'util'
global.TextEncoder = TextEncoder

export default {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        
    },
    transformIgnorePatterns: [
        "/node_modules/(?!react-leaflet)/"
      ],

    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],

}