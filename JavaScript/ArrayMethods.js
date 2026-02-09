//1)array.push() => add the element at the end of the array
console.log("=======PUSH=======")

const toolsAutomation=["Selenium","Playwright","Tosca","Cypress"]
console.log("Before Push: "+toolsAutomation)
toolsAutomation.push("Pupeteer","QTP")
console.log("After Push: "+toolsAutomation)
toolsAutomation.push("Selenium")
console.log(toolsAutomation)

//2)array.pop() => removes last element from the array
console.log("======POP========")

toolsAutomation.pop()
console.log(toolsAutomation)

toolsAutomation.pop()
console.log(toolsAutomation)

//3)array.shift() => removes the first element from the array
console.log("=========SHIFT=========")

toolsAutomation.shift()
console.log(toolsAutomation)
toolsAutomation.shift()
console.log(toolsAutomation)

//4)array.unshift() => adds the element at the beginning of the array
console.log("=========UNSHIFT=======")

toolsAutomation.unshift("PlayWright","Selenium")
console.log(toolsAutomation)

//5)array.includes() => check whether the element is present in the array or not
console.log("========INCLUDES========")

console.log(toolsAutomation.includes("Selenium"))
console.log(toolsAutomation.includes("QTP"))
if(toolsAutomation.includes("QTP")){
    console("Included")
}else{
    console.log("Not Included")
}

//6)array.index() => it returns the index of the first occurance of the special element in the array
console.log("=========INDEX========")

console.log("Index of Tosca: "+toolsAutomation.indexOf("Tosca"))
console.log(toolsAutomation.indexOf("QTP"))

//7)array.concat() => it is used to merge two or more arrays
console.log("==========CONCAT=======")

const tools=["Selenium","Playwright"]
const programmingLang=["Java","JavaScript"]
const joinedTools=tools.concat(programmingLang)
console.log(joinedTools)

//8)array.reverse() => it is used to reverse the order of the elements in the array
console.log("=========REVERSE========")

toolsAutomation.reverse()
console.log(toolsAutomation)
toolsAutomation.reverse()
console.log(toolsAutomation)

//9)array.flat() => to flatten the nested array
console.log("===========FLAT========")

let nestedItems=[1,2,3,4,['A','B','C'],['a','b','c',[6,7,8,9]]]
console.log(nestedItems.flat(1))
console.log(nestedItems.flat(Infinity))

//10)array.join() => join the elements of the array into a string
console.log("=========JOIN========")

console.log(toolsAutomation.join())
console.log(toolsAutomation.join())

//11)array.forEach() => execute a provided function once for each array element

toolsAutomation.forEach((value,index,completeArray)=>{
    console.log(value)
    console.log(index)
    console.log(completeArray)
})