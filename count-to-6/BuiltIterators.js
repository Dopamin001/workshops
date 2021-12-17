

module.exports = function filterForNumbers(iterable) {

    result = []
    for (const value of iterable) {
        if (typeof value === 'number') {
            result.push(value)
        }
    }
    return result
}

// module.exports = (iterable) => Array.from(iterable).filter((v) => typeof v === "number")

// iterator = a[Symbol.iterator]()
// let done = false;
// do {
//     const res = iterator.next();
//     done = res.done
//     console.log(res.value)
// } while(!done)

// for(const value of a) console.log(value)