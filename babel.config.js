module.exports = {
  presets: [['@babel/env', {
    // modules: 'false'
  }], [
    '@babel/preset-react', {
      'pragma': 'React.createElement' // default pragma is React.createElement
    }
  ]],
  plugins: ['@babel/plugin-proposal-class-properties']
}
