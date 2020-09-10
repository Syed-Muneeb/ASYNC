
console.log("before prepare food");

function prepareFood(data){
    
    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {

            if(data !== 2){

                console.log("food prepare");
                resolve("food is ready");
            }
            else{

                reject("you have some problem !")
            }
        },1000)
    });

        return promise;
}

function prepareFrenchToast(){

    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {

             console.log("french toast");
             resolve("french toast is ready ")

        },1000)
    });
        return promise;
}

function prepareCoffe(){

    let promise = new Promise(function(resolve,reject){
        
        setTimeout(() => {

            console.log("coffe");
            resolve("coffe is ready");

        },1000)
    });

     return promise;
}

let promise = prepareFood(1);

    promise.then(function(value){
        console.log(value);
            return prepareFrenchToast()
})
    .then(function(value){
           console.log(value);
              return prepareCoffe()

 })
  .then(function(value){
            console.log(value)
  })

    .catch(function(error){

        console.log(error)
    })

    // prepareFood(function (value){
    //     console.log(value);    
    //     prepareFrenchToast(function(value){
    //         console.log(value);
    //         prepareCoffe(function (value){
    //             console.log(value)
    //         }); 
    //     }); 
    // });
        
        // function coffeCallback(value){
        
        //      console.log(value)
        // }
        
        // function mycallback(value){
        
        //         console.log(value);    
        //         prepareFrenchToast(frenchToastCallBack)
        // }
        
        // function frenchToastCallBack(value){
        
        //         console.log(value);
        //         prepareCoffe(coffeCallback)
        // }
console.log("after prepare food");



