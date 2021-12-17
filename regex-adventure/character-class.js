module.exports = function (str) {
    return /^[aeiou\d]/gm.test(str)
  }