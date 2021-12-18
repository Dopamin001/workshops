module.exports = function average(...Rest) {
    const divider = Rest.length
    let counter = 0
    console.log(divider)
    Rest.forEach((e) => {
        counter += e
    })
    const result = counter/divider
    return result

    
};
