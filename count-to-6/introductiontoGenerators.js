module.exports = function* generate(isEven) {
    let count = isEven ? 0 : -1;

    while (true) {
        count += 2;
        yield count;
    }


}