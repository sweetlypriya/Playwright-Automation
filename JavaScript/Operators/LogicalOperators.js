//LOGICAL OPERATORS

//&& - AND (When both conditions are true it returns true . but if any 1 condition fails also it returns false)

console.log((10=='10')&&('10'=='10')) //true (both conditions are true)
console.log(('10'==10)&&(10==17)) //false (one condition is true but one condition is false)
console.log((10==='10')&&(10===90)) //false (both conditions are false)

// || - OR (it returns true if any one condition is true or both conditions are true. but if both condition fails it returns false)

console.log((10>5)||(67<=67)) //true (both conditions are true)
console.log((25<12)||((5+2)===(6+1))) //true (one condition is false but one condition is true)
console.log((10<3)||(2>5)) //false (both conditions are false)

// ! - NOT (NOT means not true because it returns true only if it is not true.if value is true ,then !value is false so it returns false.If value is false then !value is true and returns true .)

console.log(!true) //false (opposite of true false)
console.log(!false) //true (opposite of false true)
console.log(!(10>5)) //false (condition is true so it returns false)
console.log(!(5>10)) //true (condition fails so it returns true)