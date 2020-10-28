var a= 5;  //expression

//function expression is assingning function to variable,function doesn't have a name
 var b= function(){
     console.log("This is function expression")
 };
 //function expression sholud be ended with semi-colon



 var a=function(x,y)
 {
     return (x+y);
 };
 var add= a(5,10);
 console.log(add);

//Arrow function
 var a = (x,y)=>{return (x+y)}; //single-line function
 console.log(a(10,20));