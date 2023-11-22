/**** Section 5 👉 Functions in JavaScript ****/

// A JavaScript function is a block of code designed to perform a particular task.



//  1️⃣Function Definition 

// Before we use a function, we need to define it. 

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// function f1() {
//     //statements
// }

// function sum() {
//     var a=9,b=10;
//     var total= a+b;
//     // console.log(total);
// }
// sum();


// function sum(a,b) {
//     var total= a+b;
//     return total;
// }
// console.log(sum(12,45));



// anonymous function 
var funExp=function(a,b) {
    var total= a+b;
    return total;
}
var x=funExp(34,56);
console.log(x); 