var inputs = process.argv.slice(2);
const reducer = (acc, e) => acc + e;
var result = inputs.map(e => e[0])
                    .reduce(reducer) ;



console.log(`[${inputs}] becomes "${result}"`);