//GLOBAL SCOPE VARIABLE

var a=10 //global scope variable
let b=20 //global scope variable
const c=30 //global scope variable

console.log(a)
console.log(b)
console.log(c)

if(true){

    console.log(a)
    console.log(b)
    console.log(c)

}

//LOCAL SCOPE VARIABLE

if(true){
    var d=40 //global scope
    let e=50 //local scope
    const f=60 //local scope

    console.log(d)
    console.log(e)
    console.log(f)
}

console.log(d)
//console.log(e) //e is not defined error
//console.log(f) //f is not defined error