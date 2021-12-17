
 const marked = require('marked')

module.exports = function (str) {
    
    console.log("str: ", str)
    const match = marked(str)
    const solutions = match.replace(`@@${match[1]}@@`,`<blink>${match[1]}</blink>`)
    
  }
//fail


