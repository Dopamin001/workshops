module.exports = function generate(isEven) {
    let count;
    isEven === true ? count = 0 : count = -1

    const iterator = {
        next: function (swap) {
            count += swap ? 1 : 2
            return {
                value: count
            }
        }

    }
    return iterator;

}