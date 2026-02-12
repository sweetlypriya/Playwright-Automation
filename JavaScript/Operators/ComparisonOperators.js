//COMPARISON OPERATORS

//== -> equal (compare only values and if both values are equal returns True)

console.log("========EQUAL======")

console.log(10==10) //true
console.log("10"==10) //true
console.log(10=="10") //true
console.log("10"=="10") //true
console.log(10==20) //false
console.log(10=="20") //false
console.log("10"=="20") //false

//=== -> Strict equal (compares both values and datatypes .if both are equal returns True)

console.log("=======STRICT EQUAL========")

console.log(10===10) //true
console.log("10"===10) //false
console.log(10==="10") //false
console.log("10"==="10") //true
console.log(10===20) //false
console.log(10==="20") //false
console.log("10"==="20") //false

//!= -> not equal (compare only values and if both values are not equal returns True)

console.log("========NOT EQUAL======")

console.log(10!=10) //false
console.log("10"!=10) //false
console.log(10!="10") //false
console.log("10"!="10") //false
console.log(10!=20) //true
console.log(10!="20") //true
console.log("10"!="20") //true

//!== -> Strict not equal (compares both values and datatypes .if both are not equal returns True)

console.log("=======STRICT NOT EQUAL========")

console.log(10!==10) //false
console.log("10"!==10) //true
console.log(10!=="10") //true
console.log("10"!=="10") //false
console.log(10!==20) //true
console.log(10!=="20") //true
console.log("10"!=="20") //true

//> -> greater than

console.log("=======GREATER THAN========")

console.log(5>2)
console.log(2>5)

//> -> less than

console.log("=======LESS THAN========")


console.log(5<2)
console.log(2<5)

//>= -> greater than or equal to

console.log("=======GREATER THAN OR EQUAL TO========")

console.log(5>=2)
console.log(2>=5)
console.log(1>=1)

//>= -> less than or equal to

console.log("=======LESS THAN OR EQUAL TO========")

console.log(5<=2)
console.log(2<=5)
console.log(7<=7)