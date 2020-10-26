/*
//by default js is in sloppy mode
var x=10, z=2.11, t= true, p;
y = 20;   //javascript is loosely typed
y = "simran"
console.log(x);
console.log(y);
console.log(z);
console.log(t);
console.log(p);  //var declared but not inittialized with value then default return is undefined
*/

/*
"use strict"; //can't create variable without var keyword
var x=10;
y = 20;   
var z= 010;  //octal notation not allowed in strict mode
y = "simran"
console.log(y);
console.log(z);
*/

/*
var x=10;  //global variable
function hello()
{
    var y=20;
    console.log(x);
    console.log(y);
}
hello();
console.log(x);
console.log(y); //error as y is local var.
*/

/*
function hello()
{
    var y=20;
    x= 100;    //this x is accessible outside the function since a variable which is declared without using 'var' is by default global
    console.log(x);
    console.log(y);
}
hello();
console.log(x);  //if it was strict mode then this would raise error
*/
function hello()
{
    var y=20;
    window.x= 100; //creating global var inside function, window is object of browser therefore it willn't execute here,it executes only in browser in console on inspecting
    console.log(x);
    console.log(y);
}
hello();
console.log(x);
