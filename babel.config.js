/* eslint-disable import/unambiguous, import/no-commonjs */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'IE 11',
            'last 2 versions'
          ]
        }
      }
    ]
  ],
  // eslint-disable-next-line sort-keys
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h'
      }
    ]
  ]
};
