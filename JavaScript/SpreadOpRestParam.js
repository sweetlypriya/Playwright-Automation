//Spread Parameter => convert array into a split value

const arr=[1,2,3,4]
console.log(...arr)

//Rest Parameter => convert split values into array

function num(...arr){
    console.log(arr)
}
num(9,8,7,6,5)