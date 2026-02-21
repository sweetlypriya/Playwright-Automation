"use strict";
//1)number
let value = 5;
//value="automation"
value = 20;
console.log(value);
//2)String
let myName = "priya";
myName = "sweetly priya";
console.log(myName);
//3)boolean
let amWomen = false;
amWomen = true;
console.log(amWomen);
//4)undefined
let noValue = undefined;
console.log(noValue);
//5)null
let nullValue = null;
console.log(nullValue);
//6)any => it will not check datatype
let anyValue = 10;
anyValue = "priya";
console.log(anyValue - 1);
//7)unknown => it will check datatype
let unknownValue = 10;
unknownValue = "priya";
//console.log(unknownValue-1) -error
console.log(Number(unknownValue) - 1);
//Reference datatypes
//1)array
const arr = ["Playwright", "cypress", "selenium"];
const num = [1, 4, 7, 6];
const nestArr = ["playwright", 45, true, ["microsoft", 2020, [true]], ["selenium", true, null]];
console.log(nestArr);
console.log(nestArr[3]);
//2)Object
const obj = {
    toolName: "playwright",
    age: 5,
    moreInfo: {
        ownedBy: "microsoft",
        year: 2020
    }
};
//? is a optional value
console.log(obj);
console.log(obj.toolName);
//3)function
function print() {
    return "automation";
}
console.log(print());
//# sourceMappingURL=datatypes.js.map