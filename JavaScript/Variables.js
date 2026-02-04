//=>var - can be redeclared and reassigned

var automationTool="QTP"
console.log(automationTool)

var automationTool="Selenium" //redeclared
console.log(automationTool)

automationTool="Playwright" //reassigned
console.log(automationTool)

console.log("finally var will print "+automationTool)

//=>let - can't be redeclared but can be reassigned

let myName="Sweetly"
console.log(myName)

//let myName="Priya" //cannot be redeclared

myName ="Sweetly Priya" //reassigned
console.log(myName)

console.log("finally let will print "+myName)

//=>const

const age=32
console.log(age)

//const age=30 //cannot be redeclared

//age=31 //cannot be reassigned - it will throw runtime error
