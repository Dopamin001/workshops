    
var promise = new Promise(function (fulfill, reject) {
    fulfill('SECRET VALUE');
  });
promise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})
  
var promise2 = Promise.resolve('SECRET VALUE');
  
var promise3 = Promise.reject(new Error('SECRET VALUE'));
