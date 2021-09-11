const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugins: ["babel-plugin-styled-components"],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
