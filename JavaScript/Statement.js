//if

let loginAttempts=4
if(loginAttempts>3){
    console.log("Account is temperorly Locked")
}

//if-else

let marks=12

if(marks>35){
    console.log("Passed")
}else{
    console.log("failed")
}

//if - else if - else

let amount=6000

if(amount>15000){
    console.log("50% Discount")
}else if((amount>=10000)&&(amount<15000)){
    console.log("30% Discount")
}else if((amount>=5000)&&(amount<10000)){
    console.log("20% Discount")
}else if((amount>=3000)&&(amount<5000)){
    console.log("10% Discount")
}else{
    console.log("No Discount")
}

//Switch

let role = 'editor'

switch(role){
    case "admin":{
        console.log("Full Access")
        break;
    }
    case "editor":{
        console.log("Editor Access")
        break;
    }
    case "viewer":{
        console.log("View Access")
        break;
    }
    default:{
        console.log("Invalid Role")
    }
}
    