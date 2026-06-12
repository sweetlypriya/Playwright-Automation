//Duplicate Programs


let str1:string='aabccde'

//print the first non duplicate letter o/p:b
let output1=str1.split('').find(x=>str1.indexOf(x)===str1.lastIndexOf(x))
console.log('First non duplicate charactor from the string aabccde is : '+output1);

//remove duplicates and print o/p: abcde
let split=str1.split('')
let output2=split.filter((x,index)=>split.indexOf(x)===index).join('')
console.log('String after removing duplicates: '+output2);

//print all non duplicate characters o/p:bde
let output3=str1.split('').filter(x=>str1.indexOf(x)===str1.lastIndexOf(x)).join('')
console.log('Non duplicate charactor from the string aabccde is : '+output3);

//print all duplicate characters o/p:ac
let output4=str1.split('').filter(x=>str1.indexOf(x)!==str1.lastIndexOf(x)).filter((x,index)=>split.indexOf(x)===index).join('')
console.log('Duplicate charactor from the string aabccde is : '+output4);

//print the 1st occurence 
//Input: ["Apple", "Banana", "apple", "BANANA", "Orange", "Apple"]
//Output: ["Apple", "Banana", "Orange"]

function printFirstOccuranceOfDuplicates(){

    let array:string[]=["bAnaNa","Apple", "Banana", "apple", "BANANA", "Orange", "Apple"]

    //method 1
    let result4=array.filter((item,index,arr)=>arr.findIndex(x=>item.toLowerCase()===x.toLowerCase())===index)
    console.log(result4);

    //method2
    let set=new Set<string>()
    let result5=array.filter(x=>{const lowerCase=x.toLowerCase()
    if(set.has(lowerCase)){return false}
    set.add(lowerCase)
    return true
})
console.log(result5)   
}
printFirstOccuranceOfDuplicates()









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


let duplArr:string[]=['HellO','hElLo','woRlD','heLLo','WoRlD']
//o/p:[HellO,woRlD]

let reslt4=duplArr.filter( (item,index,arr)=> arr.findIndex(x=>x.toLowerCase()===item.toLowerCase())===index)
console.log(reslt4)

