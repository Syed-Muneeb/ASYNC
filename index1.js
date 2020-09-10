

console.log("before prepare food");

function prepareFood(callback){
    
        setTimeout(() => {

            console.log("food prepare");
            callback("food is ready");

        },1000)
}

function prepareFrenchToast(frenchToastCallBack){

        setTimeout(() => {

             console.log("french toast");
             frenchToastCallBack("french toast is ready ")

        },1000)
}

function prepareCoffe(coffeCallback){

        setTimeout(() => {

            console.log("coffe");
            coffeCallback("coffe is ready");

        },1000)
}

prepareFood(function (value){
    console.log(value);    
    prepareFrenchToast(function(value){
        console.log(value);
        prepareCoffe(function (value){
            console.log(value)
        }); 
    }); 
});
        
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