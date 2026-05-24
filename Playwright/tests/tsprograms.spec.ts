let str:string='%@1234%@'
let num:number=12346578
let stri:string='aabbcdde'

let rev=num.toString().split('').reverse().join('')
let special=str.replace(/[^a-zA-Z0-9]/g,'')
let dupli=stri.split('').find(x=>stri.indexOf(x)===stri.lastIndexOf(x))

console.log(rev)
console.log(special)
console.log(dupli)