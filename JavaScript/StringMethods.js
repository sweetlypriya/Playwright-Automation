//1)length => includes the length of a string 
// includes spaces and special characters also
console.log("======LENGTH=======")

const personName="Sweetly Priya"
const length=personName.length
console.log(length)

//2)toUpperCase() => returns new string with all characters converted to uppercase
console.log("========UPPERCASE========")

console.log(personName.toUpperCase())

//3)toLowerCase() => returns new string with all characters converted to lowercase
console.log("========LOWERCASE========")

console.log(personName.toLowerCase())

//4)includes() => check if a string contains a specified substring
// it returns boolean value
console.log("========INCLUDES======")

console.log(personName.includes("Priya"))
console.log(personName.includes("R"))

//5)indexOf() => returns the index of the first occurance of the specified substring in a string
console.log("=========INDEXOF=====")

console.log(personName.indexOf(" "))
console.log(personName.indexOf("y"))

//6)slice() => extracts the section of a string
// last index excluded
console.log("========SLICE=======")

console.log(personName.slice(8,13))

//7)replace() => it replaces the first occurance by the given substring
console.log("=========REPLACE=======")

const progLang="java and javascript is a programming language"
console.log(progLang.replace("java","python"))

//8)replaceAll() => it replaces all the occurance by the given substring
console.log("=========REPLACEALL=======")

const wordsToReplace=" hello world hello hello "
console.log(wordsToReplace.replaceAll("hello","hi"))

//9)trim() =>removes white spaces from both ends
console.log("========TRIM========")

console.log(wordsToReplace.trim())

//10)charAt() => returns character of a specified index in a string
console.log("==========CHARAT========")

console.log(personName.charAt(5))

//11)concat() => concats 2 or more string and returns new string
console.log("==========CONCAT=========")

    //method 1
console.log(personName.concat(" ",wordsToReplace))

    //method 2
console.log(personName+" "+progLang)

    //method 3
console.log(`${progLang} ${personName}`)

//12)startsWith() => check if string starts with specified substring
console.log("===========STARTSWITH========")

console.log(personName.startsWith("Sweet"))

//13)endsWith() => check if string ends with specified substring
console.log("===========ENDSWITH========")

console.log(personName.endsWith("Priya"))
console.log(personName.endsWith("priya"))

//14)split() =>split a string into array of substrings based on a specified seperator
console.log("=========SPLIT========")

console.log(personName.split(""))
const reverseString=personName.split("").reverse()
console.log(reverseString)
const joinString=reverseString.join("")
console.log(joinString)
