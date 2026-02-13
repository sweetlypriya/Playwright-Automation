// Array Destructuring => Another method of accessing array

//Array
console.log("=====ARRAY=====")

const automation=["playwright","selenium","cypress","pupeteer"]

const [first,second,third,forth]=automation
console.log(first)
console.log(second)
console.log(third)
console.log(forth)

//Object
console.log("=====OBJECT=====")

const personDetails={
    personName: "Priya",
    age:32,
    moreInfo:{
        automationTool: "playwright",
        language:"java"
    },
    place:"chennai"    
}

const {personName,age,moreInfo:{automationTool,language},place}=personDetails
console.log(personName)
console.log(age)
console.log(automationTool)
console.log(language)
console.log(place)