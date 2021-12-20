
first().then((message) => {
    return second(message)
}).then(console.log)