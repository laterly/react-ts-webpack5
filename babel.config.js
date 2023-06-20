module.exports = {
  presets: [['react-app', { flow: false, typescript: true, modules: false }]],
  plugins: [
    'lodash',
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
        libraryDirectory: 'lib',
      },
      'antd',
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-spread',
  ],
};
