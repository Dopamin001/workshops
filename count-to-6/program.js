const { number } = require("prop-types")


module.exports = function filterForNumbers(iterable) {

    array = []
    for (let i of iterable) {
        if (typeof i === 'number') {
            array.push(i)
        }
    }
    return array
}
