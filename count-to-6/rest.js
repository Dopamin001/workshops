module.exports = function average(...Rest) {
    const divider = Rest.length
    let counter = 0
    console.log(divider)
    const result = Rest.forEach((e) => counter += e)
    return result/divider

    
};
