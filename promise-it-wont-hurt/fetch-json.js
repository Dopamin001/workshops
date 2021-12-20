const varhttp = require("q-io/http");

varhttp.read("http://localhost:1337")
.then((data) => {
    console.log(JSON.parse(data))
}).then(null, console.error).done()
