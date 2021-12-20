function all(promiseA, promiseB) {
    const promise = new Promise((resolve, reject) => {
        let count = 0;
        let array = [];
        promiseA.then((val) => {
            array[0] = val;
            count++;

            if (count >= 2) {
                fulfill(array);
            }
        });

        promiseB.then((val) => {
            array[1] = val;
            count++;

            if (count >= 2) {
                fulfill(array);
            }
        });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);

