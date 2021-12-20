var varhttp = require('q-io/http');

varhttp.read("http://localhost:7000/")
.then((ID) => {
  return varhttp.read("http://localhost:7001/" + ID);
})
.then((object) => {
  console.log(JSON.parse(object));
})
.then(null, console.error).done();