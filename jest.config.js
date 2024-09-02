const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],

  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/stories.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
  ],
};

module.exports = createJestConfig(customJestConfig);
