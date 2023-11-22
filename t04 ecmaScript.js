// ----ECMAScript ES6 ---------------------------------------------------------------------------------

// difference b/w var / const/ let-------------------

// function biodata(){
//     var myFirstName="RISHU"
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Raj"
//         console.log("inner "+myLastName)
//         console.log("inner "+myFirstName)
//     }
//     console.log("innerOutter "+ myLastName)
// }
// biodata()


// Template literals (Template String) 
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}th position`) //Template literals (Template String) 
//     console.log("8 x "+i+" = "+8*i);
// }
// function mult(a,b=6){// default parameter
//     return a*b;
// }
// console.log(mult(7,6,5)) 




// fat Arrow = function-------------------------------------------------->

//  console.log(sum()); // can call the function initially
//  function sum(){
//      let a=5,b=6;
//      let s=a+b;
//      return `the sum of the number is ${s}`;
//  }
//------------------------------------------------------------------------------------------------
// ----------conversion in fat Arrow--------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
// console.log(sum()); // can't call function initially
// const sum = () => 
// // --------------------after arrow-----only------vvvvv--------------------------------------
// // const sum = () => `the sum of the number is ${(a=5)+(b=6)}`
// // ----------------------------------------------------------------
// // {
// //     // let a=5,b=6;
// //     // let s=a+b;
// //     // return `the sum of the number is ${s}`;

// //     // ---------------------or only-------------------------------------------
// //     // let a=5,b=6;
// //     // return `the sum of the number is ${a+b}`;
// //     // ---------------------or only---------------------------------------
// //     // return `the sum of the number is ${(a=5)+(b=6)}`;
// //     // ----------------------------------------------------------------
// // }
// console.log(sum()); // can only call function when it has already been previously initializies