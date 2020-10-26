/*
console.log(x);  // no error although x not defined
var x= 20;  
//variable hosting declares(doesn't initialize) variables by itself(with default undefined) therefore no error on calling console.log(x).It works with var keyword only not with let.
*/

/*
 console.log(x);  //error as variable hosting not for let 
 let x= 20;
 */

 /*
var x;
console.log(x);
var x=20;
console.log(x);
*/

/*
var x= 20;
var x= 30;  //variables can be redeclared in var
console.log(x);
*/

let x= 20;
let x= 30;  //variables can't be redeclared in let
console.log(x);

//best way to declare a variable is using const keyword