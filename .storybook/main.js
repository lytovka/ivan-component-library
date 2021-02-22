const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
      viewport: false,
      actions: false
    }
  }],
  typescript: {
    reactDocgen: false,
  },
  exclude: [/node_modules/, '/src/**/*/*.test.ts', '/src/**/*/*.test.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "src"),
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          [
            require.resolve("@babel/preset-env"),
            {
              targets: {
                browsers: ["ie >= 11", "safari >= 9", "edge >= 38"],
              },
            },
          ],
          [
            require.resolve("babel-preset-react-app"),
            { flow: false, typescript: true },
          ],
        ],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
