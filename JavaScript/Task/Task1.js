/*1) Print array values using index
const fruits = ["Apple", "orange", "Mango", "Banana", "Grapes", "Watermelon"]
Tasks / Questions:
1. Print the first fruit.
2. Print the last fruit.
3. Print 3rd fruit.
4. Print total number of fruits.
5. Print the complete array.*/

console.log("==========Task 1==========")

console.log("=====Question 1=======")

const fruits = ["Apple", "orange", "Mango", "Banana", "Grapes", "Watermelon"]

//1. Print the first fruit.
const firstFruit=fruits[0]
console.log("First Fruit: "+firstFruit)

//2. Print the last fruit.
const length=fruits.length
const lastFruit=fruits[length-1]
console.log("Last Fruit: "+lastFruit)

//3. Print 3rd fruit.
const thirdFruit=fruits[2]
console.log("Third Fruit: "+thirdFruit)

//4. Print total number of fruits.
console.log("Total Number of Fruits: "+length)

//5. Print the complete array.
console.log("Complete Array: "+fruits)

console.log("=========Question 2==========")

/*2) Print array values using For In Loop & If - Else Statement
const numbers = [10, 25, 30, 45, 50, 65];
Tasks / Questions:
1. Print the number values which are greater than 30
2. Print the index values which are less than 50
3. Print the values which is equal to 30
4. Print the values which is not equal to 30 */

const numbers = [10, 25, 30, 45, 50, 65]

// 1. Print the number values which are greater than 30
for(let index in numbers){
    let num=numbers[index]
    if(num>30){
        console.log("Values Greater Than 30: "+num)
    }
}

console.log()

// 2. Print the index values which are less than 50
for(let index in numbers){
    let num=numbers[index]
    if(num<50){
         console.log("Index Values of Number Less than 50: "+index)
    }
}

console.log()

// 3. Print the values which is equal to 30
// 4. Print the values which is not equal to 30
for(let index in numbers){
    let num=numbers[index]
    if(num===30){
        console.log("Values Equal to 30: "+num)
    }else if(num!==30){
        console.log("Values Not Equal to 30: "+num)
    }
}

console.log("=========Question 3==========")

/*3) Print the array values using For of Loop & If - Else Statement
const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera", "Internet Explorer"]
Tasks / Questions:
1. Print the Firefox browser value
2. Print any 3 browser values*/

const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera", "Internet Explorer"]

//1. Print the Firefox browser value
for(let value of browsers){
    if(value==="Firefox"){
        console.log(value)
    }
}

console.log()

//2. Print any 3 browser values
let i=0
for(let value of browsers){
    if(i<3){
        console.log(value)
        i++
    }
}

//or
console.log()
for(let value of browsers){
    if(value==="Firefox"||value==="Safari"||value==="Internet Explorer"){
        console.log(value)
    }
}

console.log("=========Question 4==========")

/*4) Print the array values using For Loop & If - Else Statement
const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera’, "Internet Explorer’];
Tasks / Questions:
1. Print the Firefox browser value
2. Print any 3 browser values
3. Print the values which are greater by index 2*/

//1. Print the Firefox browser value
for(let i=0;i<length;i++){
    if(browsers[i]==="Firefox"){
        console.log(browsers[i])
    }
}
console.log()
//2. Print any 3 browser values
for(let i=0;i<length;i++){
    if(i<=2){
        console.log(browsers[i])
    }
}
console.log()
//3. Print the values which are greater by index 2
for(let i=0;i<length;i++){
    if(i>2){
        console.log(browsers[i])
    }
}

console.log("=========Question 5==========")
/*5) Print the value using Function by passing as an argument
Description: Create a function, pass any value as an argument and print the value using function
Expected Output : print the value*/

function print(enterValueToPrint){
    console.log(enterValueToPrint)
}
print("print the value")

console.log("=========Question 6==========")
/*6) Print the Array value using Function & Loop by passing array as an argument
const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera’, "Internet Explorer’];
Description: Create a function, pass the array as an argument, and print all values using a loop.
Expected Output : print all the array values */

function printArrays(browserList){
    for(let value of browserList){
        console.log(value)
    }
}
printArrays(browsers)

console.log("=========Question 7==========")
/*7) Print the addition value using Function by passing as an argument and return the value and then print it
Description: Create a function, pass any value as an argument and return the addition value
Expected Output : print addition value */

let addition=(a,b)=>{return(a+b)}
let add=addition(4,5)
console.log(add)

console.log("=========Question 8==========")
/*8) Print the array value which is equal to “EDGE” using Function by passing array as an argument and return the value and then print it
const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera", "Internet Explorer"];
Expected Output : Edge */

function arrayValue(value){
    
    for(let browse of value){
        if(browse==="Edge"){
            return browse
        }

    }
}
let array=arrayValue(browsers)
console.log(array)
