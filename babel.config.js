module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            screens: './src/screens',
            assets: './src/assets',
            stores: './src/stores',
            styles: './src/styles',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
