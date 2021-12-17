module.exports = function* multiplier() {
    var num = 0,
        reset = false;

    while (true) {
        num += 1;
        reset = yield num;
        if (reset) {
            num = num * reset;
        }
    }

}

//failed