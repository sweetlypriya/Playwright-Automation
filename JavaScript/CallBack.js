//Callback => callback is a function passed as an argument to another function,and it is executed later.
//passing one function as a argument to another function
//while calling one function another function getting called

function numbers(a,b,operator){

    return operator(a,b)

}

function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

console.log(numbers(4,5,multiply))