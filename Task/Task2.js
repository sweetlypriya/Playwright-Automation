//1. Array Methods: 

//const numbers = [10, 25, 30, 5, 60, 90, 12, 44]; 

/*PART A — Basic Operations - (Use push, pop, shift, unshift) 
1) Add number 100 at end 
2) Remove last number 
3) Add 1 at beginning 
4) Remove first number */

const numbers = [10, 25, 30, 5, 60, 90, 12, 44]
console.log(numbers)

//1) Add number 100 at end 
console.log("Add number 100 at end:")
numbers.push(100)
console.log(numbers)

//2) Remove last number 
console.log("Remove last number: ")
numbers.pop()
console.log(numbers)

//3) Add 1 at beginning 
console.log("Add 1 at beginning: ")
numbers.unshift(1)
console.log(numbers)

//4) Remove first number
console.log("Remove first number: ")
numbers.shift()
console.log(numbers)

/*PART B — Search Operations - (Use includes, indexOf, find) 
1) Check if 60 exists 
2) Find index of 30 
3) Find first number greater than 50 */

//const numbers = [10, 25, 30, 5, 60, 90, 12, 44]

//1) Check if 60 exists 
console.log("Check if 60 exists: "+numbers.includes(60))
console.log()

//2) Find index of 30 
console.log("Index of 30: "+numbers.indexOf(30))
console.log()

//3) Find first number greater than 50
console.log("First number greater than 50: "+numbers.find(num=>(num>50)))
console.log()

/*PART C — Copy & Modify  - (Use slice, splice) 
1) Get first 3 numbers (new array) 
2) Remove 2 numbers starting from index 2 and insert 999 */

//const numbers = [10, 25, 30, 5, 60, 90, 12, 44]

//1) Get first 3 numbers (new array) 
console.log("first 3 numbers: ")
console.log(numbers.slice(0,3))
console.log()

//2) Remove 2 numbers starting from index 2 and insert 999
console.log("Remove 2 numbers starting from index 2 and insert 999: ")
numbers.splice(3,2,999)
console.log(numbers)
console.log()

/*PART D — Transformation - (Use map, filter, forEach) 
1) Print all numbers 
2) Create new array → numbers * 2 
3) Get only numbers greater than 40 */

//const numbers = [10, 25, 30, 5, 60, 90, 12, 44]
//[10, 25, 30, 999,90, 12, 44]


//1) Print all numbers 
console.log("Print all numbers: ")
console.log(numbers.map(num=>num))
console.log()

//2) Create new array → numbers * 2 
console.log("Create new array → numbers * 2: ")
const multiplyArray=numbers.map(num=>(num*2))
console.log(multiplyArray)
console.log()

//3) Get only numbers greater than 40
console.log("numbers greater than 40: ")
console.log(numbers.filter(num=>(num>40)))
console.log()

/*PART E — Sorting & Calculation - (Use sort, reduce) 
1) Sort ascending 
2) Sort descending 
3) Find total sum */

//1) Sort ascending 
console.log("Sort ascending: ")
console.log(numbers.sort((a,b)=>a-b))

//2) Sort descending 
console.log("Sort descending: ")
console.log(numbers.sort((a,b)=>b-a))

//3) Find total sum 
console.log("total sum :")
const reduceArr=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
console.log(reduceArr)

//2. Object Methods  
/*const user = { 
    id: 101, 
    name: "Playwright", 
    age: 5, 
    role: "Automation Testing", city: "Tamilnadu" }; 
    const extra = { company: "Microsoft", experience: 4 }; */

/*PART A — Read Object Data - (Use keys, values, entries) 
1) Get all property names (keys) 
2) Get all property values 
3) Convert object into array format */

const user = { 
    id: 101, 
    name: "Playwright", 
    age: 5, 
    role: "Automation Testing", city: "Tamilnadu" }; 
    const extra = { company: "Microsoft", experience: 4 };

//1) Get all property names (keys) 
console.log("Get all property names (keys): ")
console.log(Object.keys(user))

//2) Get all property values 
console.log("Get all property values")
console.log(Object.values(user))

//3) Convert object into array format
console.log("Convert object into array format: ")
console.log(Object.entries(user))

/*PART B — Freeze Object 
1) Freeze the object 
2) Try to change name → "Kumar" 
3) Try to add new property country 
Why modification failed? - Ans:Freeze will totally freeze the object from any changes .we cannot update,delete or 
add any values  */

console.log("Freeze Object")
//1) Freeze the object 
Object.freeze(user)

//2) Try to change name → "Kumar" 
user.name="priya"

//3) Try to add new property country 
user.country="india"

console.log(user)

/*PART C — Seal Object const employee = { name: "Ravi", age: 28 }; 
1) Seal the object 
2) Update age to 29 
3) Try to add department 
4) Try to delete age 
Difference Between freeze vs seal? - Ans:Freeze:we cannot update,delete or add any values. Seal:we can only modify the 
existing value but we cannot add or delete values from object */

const employee = { name: "Ravi", age: 28 }; 
console.log("Seal Object")

//1) Seal the object 
Object.seal(employee)

//2) Update age to 29 
employee.age=29

//3) Try to add department 
employee.department="testing"

//4) Try to delete age 
delete employee.age

console.log(employee)

//Destructuring 

const skills = ["JavaScript", "Playwright", "API Testing", "SQL"]; 

/*PART A — Array Destructuring 
1) Extract first two skills into variables 
2) Extract remaining skills into another array 
3) Skip the first skill and get the second skill only  */

console.log()
console.log("Array Destructuring:")
//1) Extract first two skills into variables 
const[skill1,skill2]=skills
console.log(skill1)
console.log(skill2)

//2) Extract remaining skills into another array 
const[skills1,skills2,,...rest]=skills
console.log(rest)

//3) Skip the first skill and get the second skill only
const[,secondSkill]=skills
console.log(secondSkill)

/*PART B — Object Destructuring 
1) Extract name and salary 
2) Extract nested object city  */

const employees = { 
    id: 1, 
    name: "playwright", 
    age: 5, 
    department: "QA", 
    salary: 100000, 
    address: { city: "Coimbatore", state: "Tamil Nadu" } 
}; 

console.log()
console.log("Object Destructuring: ")
//1) Extract name and salary 
const{id,name,age,department,salary,address:{city,state}}=employees

console.log(name)
console.log(salary)

//2) Extract nested object city
console.log(city)

/*PART C — Spread Operator 
1) Print the values using spread operator 
2) Create a function and sum the values using spread operators  */

console.log()
console.log("Spread Operator : ")

const numbers1 = [10, 25, 30, 5, 60, 90, 12, 44]; 

//1) Print the values using spread operator 
console.log(...numbers1)

//2) Create a function and sum the values using spread operators
const arr=[2,3,4,5]
function sum(a,b,c,d){
    return a+b+c+d
}
const result=sum(...arr)

console.log(result)

/*PART D — Rest Parameters 
1) Create a function and sum the values using rest parameters 
2) Print the first 2 values and print the rest of the values using rest parameter  */

console.log()
console.log("Rest Parameters: ")

//1) Create a function and sum the values using rest parameters 


function sum(...number){
    let sum=0
    for(num of number){

        sum=sum+num
    }
    return sum
}
const results=sum(1,2,3,4)

console.log(result)
