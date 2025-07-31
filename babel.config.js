/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./src",
        },
        extensions: [".js", ".json"],
        root: ["./src"],
      },
    ],
    "inline-dotenv",
    [
      "module:react-native-dotenv",
      {
        envName: "ENV",
        moduleName: "@env",
        path: ".env",
        allowUndefined: true,

      },
    ],
    "react-native-reanimated/plugin", // needs to be last
  ],
  presets: ["module:@react-native/babel-preset", "nativewind/babel"],
};
