//Hoisting in var

console.log(a)
var a=10; //a:undefined

//Hoisting let
// console.log(b)
// let b=1; //b:TDZ -> error:Cannot access 'b' before initialization

//Hoisting const
// console.log(c)
// let c=7; //c:TDZ -> error:Cannot access 'c' before initialization 

//Hoisting function declaration
hello()
function hello(){
    console.log("Say Hi");
    
}

//Hoisting in function expression
// xyz()
// var xyz=function(){
//     console.log("abc");
    
// } //it will store as a variable during creation xyz:undefined
//error:xyz is not a function

x()
let x=function(){
    console.log("x");
    
} ///it will store as a variable during creation x:TDZ
//Cannot access 'x' before initialization

