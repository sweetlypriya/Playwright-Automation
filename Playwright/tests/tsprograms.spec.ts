let str:string='%@1234%@'
let num:number=12346578
let stri:string='aabbcdde'

let rev=num.toString().split('').reverse().join('')
let special=str.replace(/[^a-zA-Z0-9]/g,'')
let dupli=stri.split('').find(x=>stri.indexOf(x)===stri.lastIndexOf(x))

console.log(rev)
console.log(special)
console.log(dupli)

let arr:number[]=[1,2,3,2,4,3,5,4,8]

const result1=[...new Set(arr)]

const result2=arr.filter((x,index)=>arr.indexOf(x)===index)

const unique:number[]=[]
for(let i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
        unique.push(arr[i])
    }
}

for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++
        }
        
    }
    if(count>1&&arr.indexOf(arr[i])===i){
    console.log(arr[i]+'='+count)
}
}



const result3=arr.find(x=>arr.indexOf(x)===arr.lastIndexOf(x))

console.log(unique)

console.log(result1)
console.log(result2)
console.log(result3)
