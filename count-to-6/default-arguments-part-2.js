module.exports = function important(string, exm = string.length) {
    return string + "!".repeat(exm)
}