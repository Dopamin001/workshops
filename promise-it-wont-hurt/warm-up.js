function timeout () {
    setTimeout(logString, 300)
}

function logString() {
    console.log('TIMED OUT!')
}

timeout();