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