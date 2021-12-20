'use strict';

function parsePromised(json) {
  const promise = new Promise((resolve, reject) => {
    try {
        resolve(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
  return promise
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);