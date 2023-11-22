// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

// const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 


// mapMethod() : Returns a new array containing the results of calling a 
// function on every element in this array. 

    // const array1=[ 1,4,9,16,25]

    // let newArr = array1.map((currentElement, index , arr) =>{
    //     return `Index no = "${index}" and the value is "${currentElement}" belong to the "${arr}"`
    // })
    // console.log(newArr);
     


// find the square root of the given No.s 
    // var array1 = [4,9,16,25]
    
    // let newArr = array1.map((value,index,array) =>{
        // return `index = ${index} : value = ${value}  : square root = "${Math.sqrt(value)} : array ${array} :`
        // })
        // console.log(newArr)
        
    // let newArr = array1.map((value,index,array) => Math.sqrt(value))
    // console.log(newArr)


// var aaaaaaaaaaaaaaaaaaare = [1,2,3,4,5]
// for (let i = 0; i < aaaaaaaaaaaaaaaaaaare.length; i++) {
    //     // console.log( aaaaaaaaaaaaaaaaaaare[i]);
    //     if(aaaaaaaaaaaaaaaaaaare[i]<4 ){
        //         console.log(aaaaaaaaaaaaaaaaaaare[i])
        //     }
        // }
        
        // var newArr = aaaaaaaaaaaaaaaaaaare.map((value) =>value*2).filter((value1) =>value1<=10)
        // console.log(newArr)
        
        
        
        // reduce mathod()
        
        // to flatten an array in to single dimension
        
        // let arr =[5,6,7,8,9,10,11]
        // let sum = arr.reduce((accumulator, currentElement, index,array) =>{
            //     return accumulator+= currentElement
            // })
            // console.log(sum)
            
            
            
            
            // var aaaaaaaaaaaaaaaaaaare = [1,2,3,4,5]
            // debugger;
            // var newArr = aaaaaaaaaaaaaaaaaaare.map((value) =>value*2).filter((value1) =>value1<=10).reduce((accumulator, currentElement)=>accumulator+=currentElement)
            // // // var newArr = aaaaaaaaaaaaaaaaaaare
            // // // .map((value) =>value*2)                                                 step 1
            // // // .filter((value1) =>value1<=10)                                          step 2
            // // // .reduce((accumulator, currentElement)=>accumulator+=currentElement)     step 3
            // console.log(newArr)
            
            
const arr =[
                ['zone1','zone2'],
                ['zone3','zone2'],
                ['zone4','zone3'],
                ['zone5','zone4']
            ];

let flatArray = arr.reduce((accumulator, curVal) => {
    return accumulator.concat(curVal);
})
        console.log(flatArray)
            
            
            
            
            
            











