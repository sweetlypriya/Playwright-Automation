//1)number

let value: number=5
//value="automation"
value=20
console.log(value)

//2)String

let myName: string="priya"
myName="sweetly priya"
console.log(myName);

//3)boolean

let amWomen: boolean=false
amWomen=true
console.log(amWomen)

//4)undefined
let noValue: undefined=undefined
console.log(noValue)

//5)null
let nullValue: null=null
console.log(nullValue)

//6)any => it will not check datatype
let anyValue: any=10
anyValue="priya"
console.log(anyValue-1)

//7)unknown => it will check datatype
let unknownValue: unknown=10
unknownValue="priya"
//console.log(unknownValue-1) -error
console.log(Number(unknownValue)-1)

//Reference datatypes
//1)array

const arr:string[]=["Playwright","cypress","selenium"]
const num: number[]=[1,4,7,6]

const nestArr: (string|number|boolean|(string|number|(boolean)[])[]|(string|boolean|null)[])[] =["playwright",45,true,["microsoft",2020,[true]],["selenium",true,null]]
console.log(nestArr)
console.log(nestArr[3]);

//2)Object
const obj: {toolName:string,age:number,moreInfo:{ownedBy:string,year:number},language?:string}={
    toolName:"playwright",
    age:5,
    moreInfo:{
        ownedBy:"microsoft",
        year:2020
    }
}
//? is a optional value
console.log(obj)
console.log(obj.toolName);

//3)function

function print(): string{
    return "automation"
}
console.log(print());