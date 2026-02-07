//FUNCTIONS

//1)FUNCTION DECLARATION

let toolsAutomation=["Selenium","Playwright"]

function automation(){

    console.log(toolsAutomation[0])


}
automation()

//2)FUNCTION EXPRESSION

let fruitNames=["apple","orange","banana"]

const fruits=function(){
    console.log(fruitNames)
}

fruits()

//3)ARROW FUNCTION

let num=[1,2,3,4,5,6]
const numbers=()=>console.log(num)
numbers()
