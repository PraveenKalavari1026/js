//!Array:-Array is collection of different elements.Array is ion hetrogeneous in nature.
//!In js we can create the array in 3ways.

//! 1)By usin g array literals
//!Syntax:- Var arrayName=[data1,data2,data3,...dataN]
var x=[12,"Js",null,21.09,true]
document.write(x)
console.log(x);

//! 2)By using new keyword
//! Syntax:- var ArrayName=new Array()
var food=new Array()
console.log(food);
food[0]="meals"
food[1]="fish curry"
food[2]="Butter Chicken"
food[3]="Biryani"
console.log(food)

//! 3)By using constructor
//!Syntax:-var ArrayName=new Array(data1,data2,data3...dataN)

var veg=new Array("Samosa","Pav bhaji","Vadapav","Lemon rice","Pani puri")
console.log(veg);
//!Concat():-It returns a new array object that contains two are more merged arrays.
var x2=[10,20,30,40,50]
console.log(x2);
var x3=[21,"js",true]
console.log(x3);
var x4=["React js",22.09]
console.log(x2.concat(x3,x4));

//!Push:-Which is used to add more than one elements at the end of the array

var a=[10,40,60,80]
console.log(a);
a.push(90,"angular",true)
console.log(a);

//!Unshift():-Which is used to add more than one elements at the begining of the array.

let x5=[21,33,44,55,66]
console.log(x5);
x5.unshift(10,7,19)
console.log(x5);
