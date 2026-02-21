//Tuple - it stores multiple values in given type order and length

const auto : [string,number,string,string]=["playwright",34,"selenium","cypruss"]
console.log(auto)

//type

type valueType=string
const tool:valueType="playwright"
console.log(tool)

type valueTypes=[string,number,string,string]
const autoTools:valueTypes=["playwright",34,"selenium","cypruss"]
console.log(autoTools)

//union type => only the values mentioned in the type can be used

type value= string|number|boolean
const personName:value="sweetly"
const age:value=34
const women:value=true
    //const null:value=null //null is not assigned in the type

type status="success"|"failure"|"pending" //we cant give any other values other than this 3 values
const final:status="success" 

//INTERSECTION TYPE => merging two different types .
//applicable for only objects not arrays

type auto1={personName:string}
type auto2={age:number}
type auto3={tool:string}
type final=auto1&auto2&auto3

const automation:final={
    personName :"priya",
    age:32,
    tool:"playwright"
}

//INTERFACE => this is mainly for class

interface example{
    automation:string
    age:number
}

const person:example={
    automation:"play",
    age:34
}

//ENUM => to store constant values

enum tableHeader{
    Home="HomePage",
    product="productPage",
    login="loginpage",
    signin="signinpage"
}

console.log(tableHeader.product)



