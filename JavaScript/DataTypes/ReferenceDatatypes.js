//Reference Datatypes

//1)arrays

const toolsAutomation=["Selenium","Playwright","QTP",["Java","JavaScript","TypeScript"],null,[true,90,undefined,"DataTypes"],"PlaywrightJavaScrpt"]
console.log(toolsAutomation)
console.log("i am learning the automation tool: "+toolsAutomation[1])
console.log("Programming lanuages: "+toolsAutomation[3])
console.log("I am learning the programming language: "+toolsAutomation[3][1])
console.log("I attended offline classes: "+toolsAutomation[4])

//2)Object

console.log("========OBJECT DATATYPE==========")

const automationTool={
    name:"Playwright",  //key value pair
    age:5,
    openSource:true,
    otherTools:["Selenium","Cypress","Pupeteer"]
}

    //dot notation
    console.log(automationTool.name)
    console.log(automationTool.otherTools[1])
    console.log(automationTool.otherTools)

    //bracket notation
    console.log(automationTool['age'])
    console.log(automationTool['otherTools'][0])

//3)function-reusable

console.log("=========FUNCTION DATATYPE=========")

function printName(){
    console.log("Sweetly Priya")
}
printName()     //calling the function
printName()
printName()