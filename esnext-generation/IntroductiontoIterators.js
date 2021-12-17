module.exports = function makeCounter(someObj) {
    let count = 0, done = false;

    someObj.next = function () {

        count < 10 ? count++ : done = true;

        return {
            value: count,
            done: done
        }

    }
}