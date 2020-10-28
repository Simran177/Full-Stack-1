function myfun()
{
    console.log("This is Custom Function");
    //function definition
}
myfun(); //function call(no limits on number of calling)

function myfun(name)
{
    console.log("My name is "+ name);
    //function definition
}
myfun("Simran"); //function call(no limits on number of calling)

function myfun(fname,lname)
{
    console.log("My name is "+ fname +" " +lname);
    //function definition
}
myfun("Simran","Maurya"); //function call(no limits on number of calling)

function myfun(fname,lname)
{
    console.log("My name is "+ fname+ " "+ lname);
    //function definition
}
myfun("Simran"); //expecting two arguments but passing one will print value of other arg. as undefined

function myfun(fname,lname="Lname= not mentioned")
{
    console.log("My name is "+ fname+ " "+ lname);
    //function definition
}
myfun("Simran");

function myfun(fname,lname="Lname= not mentioned")
{
    console.log("My name is "+ fname+ " "+ lname);
    //function definition
}
myfun("Simran","Maurya");

function fun(x,y)
{
    return(x+y);
}
var sum=fun(5,10);
console.log(sum);

function fun1()
{
    var sum=0;
 for(i=0;i<arguments.length;i++)  //to catch all arguments send ny user
 {
     sum += arguments[i];
 }
 return sum;
}
//fun1 works as a general function
var a= fun1(5,10);
var b= fun1(5,10,15);
var c= fun1(5,10,15,20);
console.log(a+" "+b+" "+c);

console.log(fun1.name);




function hello(x,y,z)
{

}
hello();
console.log(hello.length);
