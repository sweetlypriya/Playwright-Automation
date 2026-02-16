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

let nestedItems=[1,2,3,4,['A','B','C'],['a','b','c',[6,[7,8],9]]]
console.log(nestedItems.flat(1))
console.log(nestedItems.flat(2))
console.log(nestedItems.flat(Infinity))

//10)array.join() => join the elements of the array into a string
console.log("=========JOIN========")

console.log(toolsAutomation.join())
console.log(toolsAutomation.join())

//11)array.forEach() => execute a provided function once for each array element
console.log("=======FOREACH=======")

toolsAutomation.forEach((value,index,completeArray)=>{
    console.log(value)
    console.log(index)
    console.log(completeArray)
})

const studentNames=["Ryan","Dani","joel","Priya"]
studentNames.forEach(names=>{
    console.log("Student Names: ",names)
})

const price=[34,65,98,26]
price.forEach(tax=>{
    console.log("Price with tax: ",tax+18)
})

//12)array.slice() => extract portions in an array. Doesn't modify original array
//end index not included
console.log("===========SLICE=======")

const fruits=["Apple","Orange","Mango","Straw Berry","Litchi","Guava"]
console.log(fruits)
console.log(fruits.slice(1,3)) //(start index,end index)

//13)array.splice() => add/remove element in an array
//returns only the selected values
console.log("=======SPLICE======")

fruits.splice(0,2,"Jack Fruit","Grapes") //(start index,delete count,items to add)
console.log(fruits)

//14)array.map() => transforms each element in the array based on the provided function and returns new array
//doesnot modify original array
console.log("========MAP=====")

const numbers=[2,4,1,7,5,9]
const multiply=numbers.map(num=>num*180)
console.log(multiply)

const upperCaseArray=fruits.map(value=>value.toUpperCase())
console.log(upperCaseArray)

//15)array.filter() => create a new array with all elements that pass the test implemented by the provided function
console.log("=======FILTER=======")

const oddNumbers=numbers.filter(num=>(num%2===1))
console.log(oddNumbers)

const oFruits=fruits.filter(value=>value.startsWith('M'))
console.log(oFruits)

//16)array.find() => returns the value of the first element in the array that satisfies the provided testing function
console.log("======FIND======")

const oddNum=numbers.find(num=>(num%2===1))
console.log(oddNum)

//17)array.every() => test whether all elements in the array pass the test implemented by  provided function
//it returns true or false
//does not modify original array
console.log("=======EVERY======")

const oddNumEvery=numbers.every(num=>(num%2===1))
console.log(oddNumEvery)

//18)array.some() => test whether atleast one element in the array passes the test implemented by provided function
//it returns true or false
//does not modify original array
//opposite of every method
console.log("=======SOME======")

const oddNumSome=numbers.some(num=>(num%2===1))
console.log(oddNumSome)

//19)array.findIndex() => returns the index of the first element in the array that satisfies the provided function
console.log("========FINDINDEX=========")

const oddNumIndex=numbers.findIndex(num=>(num%2===1))
console.log(oddNumIndex)

//20)array.sort() => sorts the elements of the array in place and returns the sortedbarray
console.log("============SORT=======")

const sortNum=numbers.sort()
console.log(sortNum)

//localeCompare() is for strings only.
const sortAscending=fruits.sort((a,b)=>a.localeCompare(b)) //ascending order
console.log(sortAscending)
const sortDescending=fruits.sort((a,b)=>b.localeCompare(a)) //descending order
console.log(sortDescending)

//21)array.at() => returns the element at the specified index in the array
console.log("========AT=======")

console.log(fruits.at(2))
console.log(fruits.at(-1))

//22)array.reduce() => execute a reduce function on each element of the array returning in a single output
console.log("==========REDUCE=======")

console.log(numbers)
const reduceArr=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,2)
console.log(reduceArr)







