module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
    },
};
