//MODERN LOOPS

//for in loop 
//it directly prints index value
//based on index we print values

let tools=["Playwright","Selenium","Cypress","Pupeteer"]

for(let index in tools){
    console.log(index)
    console.log(tools[index])

    if(tools[index]==="Cypress"){
        console.log("Successfully logged in "+tools[index])
    }
}

//for of loop
//it directly prints the value
//doe not print index

for(let value of tools){

    console.log(value)

}

//TRADITIONAL LOOPS

//for loop
for(let i=0;i<tools.length;i++){
    console.log("for loop: "+tools[i])
}

//while loop

 let i=0
while(i<5){
    console.log(i)
    i++
}

//do while loop

do{

console.log(i)
i++

}while(i<5)