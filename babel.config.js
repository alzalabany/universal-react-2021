module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            Services: './src/Services',
            Features: './src/Features',
            Interfaces: './src/Interfaces',
            Config: './src/Config',
          },
        },
      ],
    ],
  }
}
