//!function is used to perform some specific task according to the user requirement.
//!function functionName(){
//!}
//!functionName() //function call statement.

//Two Numbers
//function add(){
//    var a=10;
//    var b=20;
//    console.log(a+b);
//}
//add()

//!Create the function for sub,mul,divide and modulus
//function sub(){
//    var a=30;
//    var b=20;
//    console.log(a-b);
//}
//sub()
//function mul(){
//    var a=50;
//    var b=2;
//    console.log(a*b);
//}
//mul()
//function div(){
//    var a=30;
//    var b=20;
//    console.log(a/b);
//}
//div()

//!Named function
//!Parameterized function 
//!Anomous function
//!Nested function
//!Function with expression:=Storing entire anomous function in a
//!function with expression
//!Arrow function
//!Callback function
//!iife
//!Generator function


//!Parameter:-Parameter is nothing but variable which holds an argument.

//!argument:-The data which is passed in the function call statement we call it as arguments.

//function display(a1,b1){
 //  console.log(a1+b1);
//}
//display(10,20)

//!Anomous function:-A function w/o function name we call it as a anomous function

//var a=function (){
  //console.log();
//  document.write("js")
//}
//a()

//!add the two numbers by using anonymous.

//var b=function (a,b){
//    console.log(a+b);
//    document.write(a+b)
//}
//b(4,5)

//Arrow function

//!Syntax:-var a=()=>{}
//var a=()=>{document.write("Good eveng")}
//a()

//!Whenever we have only statement that will be present in function,it is possible to ignore the{}
//var a=()=>document.write("Gud eveng"+"<br>")
//a()

//!if we dont have any parameters at that time it is possible to ignore the().in place of the parentesis we should write _.
//var a=_=>document.write("Hi...!")
///a()

//!if we dont have any parameters at that time it is possible to ignore the().
//var b=(a)=>document.write("Hello...!")

//var b=a=>document.write("Have a gud day...!")

//!if we have only one return keyword at that time it is possible to remove the return keyword along with the{}.
//var c=sub=>{return sub}
//document.write(c("js"))

//var c=sub=>sub
//document.write(c("js")+"<br>")

//!callback function:-Function passing as an argument we called it as call back function

//function display(){
   
//}
//var a=display(function(){
//    return "React Js"
//})
//document.write(a())

//!Nested function:-Function inside another inside another function we call it as nested function
//!Closure:-Child function can access the parent function properties.vice versa is not possible.
//!Js Currying:-Calling the child function along the parent function.

function parent(){
    let a=10;
    
    function child(){
        let b=20;
        console.log(a+b);
    }
    return child();

}
//parent()()

//function demo(a,b,c){
//  console.log(a+b+c);
//  console.log(arguments[3]);//45
//}
//demo(21,30,32,45,89,79)

//!Rest parameterized function:-Which is store multiple arguments
//function display(b,...a){
//  console.log(b);//21
//  console.log(a);
//   console.log(a[1]);
//}
//display(21,32,41,51,61,71)

//!IIF:-A function called immediately as soon as function declaration
//!We can invoke anonymous function using iif

(function(){
  console.log("hello");
})()

//!Generator Function:-A generator function is defined like a normal function.but in a normal function we can use only one return.butin the generator function you can return multiple values.

function*gen(){
  yield 1;
  yield 2;
  yield 3;
}
let res=gen()
//console.log(res.next().value);//1
//console.log(res.next().value);

for(let i=1;i<=3;i++){
  console.log(res.next().value);
}
