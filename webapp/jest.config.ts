const esModules = ['@react-leaflet', 'react-leaflet', 'react-router-dom', 'react-router'].join('|');

export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        
    },
    transformIgnorePatterns: [
        `/node_modules/(?!${esModules}))`
      ],

    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],

    // plugins: [
    //     new NodePolyfillPlugin({
	// 		includeAliases: ['console']
	// 	})
    // ],

    // setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],

}