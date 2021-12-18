const arg = (process.argv[2])

function template (string) {
    console.log(`Hello, ${string}!\nYour name lowercased is "${string.toLowerCase()}".`)
}

template(arg)