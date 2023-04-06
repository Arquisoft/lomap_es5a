export default {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        
    },
    transformIgnorePatterns: [
        "/node_modules/(?!react-leaflet)/"
      ],
}