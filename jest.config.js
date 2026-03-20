export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': ['babel-jest', {
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }],
    },
    moduleNameMapper: {
        '\\.(css|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|avif|svg)$': 'jest-transform-stub',
    },
};
