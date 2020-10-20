module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 32,  // 1rem = 32   200 / 32 / 2 = 3.125 * 16 = 50
      propList: ["*"]
    }
  }
}
