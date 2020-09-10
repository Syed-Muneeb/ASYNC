console.log("start ");

let promise = new Promise(function(resolve,reject){

        resolve("first");
})

let promise2 = new Promise(function(resolve,reject){

        resolve("second");
})

promise.then(function(value){

    console.log(value)
      return promise2

}).then(function(value){

    console.log(value)
})

console.log("end")