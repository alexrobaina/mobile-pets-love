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
            services: './src/services',
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
