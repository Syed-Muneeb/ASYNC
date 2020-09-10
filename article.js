// Link =  https://hackernoon.com/javascript-promises-callbacks-and-asyncawait-pu7432af

console.log("start")

 // =============================== promises ==========================================

// let promise = new Promise((resolve,reject)=>{

//         let a = 1+1;

//         if(a == 2){

//             resolve("succeded")
//         }
//         else {

//             reject("failed")
//         }
// })

// promise.then((message)=>{

//         console.log(message)
// }).catch((error)=>{

//         console.log(error)
// })




// let promise = new Promise((resolve,reject)=>{

//     let a = 1+2;

//     if(a == 2){

//         resolve("succeded")
//     }
//     else {

//         reject("failed")
//     }
// })

//     promise.then((message)=>{

//         console.log(message)
//     }).catch((error)=>{

//         console.log(error)
//     })


 // =============================== callback ==========================================


//  function MovieCallback(callback,errorCallback){

//         let userLeft = false;
//         let userWatching = true

//         if(userLeft){

//             errorCallback({

//                 name : "episode complete",
//                 message : "Shit"
//             })
//          }

//         else if(userWatching){

//             errorCallback({

//                 name : "user watching",
//                 message :  "with harvey"
//             })
//         }

//         else{

//                 callback("awsome")
//         }
//  }

//     MovieCallback(message => console.log(message)
//                     ,message => console.log(message.name , message.message))



 // =============================== promise way ==========================================

// function MovieCallback(){

//     let userLeft = true;
//     let userWatching = false;
    
//     return  new Promise((resolve,reject)=>{

//         if(userLeft){
    
//             reject({
    
//                 name : "episode complete",
//                 message : "Shit"
//             })
//          }
    
//         else if(userWatching){
    
//             reject({
    
//                 name : "user watching",
//                 message :  "with harvey"
//             })
//         }
    
//         else{
    
//                 resolve("awsome")
//         }

//     })
// }

// MovieCallback().then(
//         message => console.log(message))
//             .catch(error => console.log(error.name,error.message))



 function makeRequest (location){

     return new Promise((resolve,reject)=>{



            if(location == "google"){
                
                resolve(location + " says hi ")
          }
            else{

                reject(" we can only talk to google ")
            }
        })
 }


    function proccesRequest (response) {

          return  new Promise((resolve,reject)=>{

                resolve("extra info : " + response)
         })
    }

    // makeRequest("google")
    //     .then(response => { console.log(" response received ") 
    //           return  proccesRequest(response)})
    //             .then(message => console.log(message))
    //                 .catch(error => console.log(error))


        async function proccess (){

            try{
                
                let make = await makeRequest("google");
                console.log("response received and pass")

                let Request = await proccesRequest(make);
                console.log(Request)
            }

            catch(error){

                    console.log(error)
            }
        }

        proccess()

console.log("end")