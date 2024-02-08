const daisyui = require('daisyui')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}
