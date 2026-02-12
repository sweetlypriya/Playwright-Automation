const automation={
    name : "Playwright",
    age: 5,
    openSource: true
}

automation.language="JavaScript" //add value to the object
automation.name="Cypress" //modify the existing value
delete automation.openSource //delete any value from object

console.log(automation)

//for in Loop
console.log("=======FOR IN LOOP========")

for(const key in automation){
    console.log(key +" : "+automation[key])
}

//for of Loop => it is not iterable so we use the object methods Object.keys() and Object.values()
console.log("========FOR OF LOOP======")

// for(const value of automation){
//     console.log(value)
// } 

//1)Object.keys() => returns the array of the given objects names(Keys)
console.log("=========KEYS==========")

for(const key of Object.keys(automation)){
    console.log(key)
}

//for both keys and value
for(const key of Object.keys(automation)){
    console.log(key+" : "+automation[key])
}

//2)Object.values() => returns the array of the given objects values
console.log("=======VALUES=======")

for(const value of Object.values(automation)){
    console.log(value)
}

//3)Object.entries() => returns array of a given object in key value pair[[key,value],[key,value]]
console.log("=======ENTRIES=======")

console.log(Object.entries(automation))

//4)Oject.freeze() => we cannot do any modifications to the Object like add,update or delete.
// It will freeze the object from modifications.
console.log("=========FREEZE========")

Object.freeze(automation)
console.log(automation)
automation.name="Playwright"
automation.tool="VS"
delete automation.age
console.log(automation)

//5)Object.seal() => We can do only modifications to the existing values but we cannot add or delete values
console.log("=========SEAL=======")

const person = {
    name: "Priya",
    age: 25,
    girl:true
}

Object.seal(person)
console.log(person)
person.place="Chennai"
person.name="Sweetly Priya"
delete person.girl
console.log(person)
