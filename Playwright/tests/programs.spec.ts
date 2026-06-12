//Program1
function removeDuplicatesCaseSensitive(arr: string[]) {

    let result = arr.filter((x, index) => arr.indexOf(x) === index)
    console.log(result)

}
let input1 = ["hello", "hello", "world", "hello", "world"] //output:["hello","world"]
removeDuplicatesCaseSensitive(input1)

//Program2
//Method 1
function removeDuplicateCaseInsensitive1(arr: string[]) {

    let result = arr.filter((item, index, arr) => arr.findIndex(x => item.toLowerCase() === x.toLowerCase()) === index)
    console.log(result);

}
let input2 = ["hElLo", "HellO", "woRLd", "hello", "WorLd"] //output:["hElLo","woRLd"]
removeDuplicateCaseInsensitive1(input2)

//Method 2
function removeDuplicateCaseInsensitive2(arr: string[]) {

    let set = new Set<string>()

    let result = arr.filter(x => {
        const lowerCase = x.toLowerCase()
        if (set.has(lowerCase)) { return false }
        set.add(lowerCase)
        return true
    })
    console.log(result);

}
let input3 = ["hElLo", "HellO", "woRLd", "hello", "WorLd"] //output:["hElLo","woRLd"]
removeDuplicateCaseInsensitive2(input3)

//Program 3
function printDuplicateValuesOnly(arr: string[]) {

    let set = new Set<string>()

    let duplicates = arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x))

    let result = duplicates.filter(x => {
        if (set.has(x)) { return false }
        set.add(x)
        return true
    })
    console.log(result);

}
let input4 = ["apple", "banana", "apple", "orange", "banana"] //output:["apple","banana"]
printDuplicateValuesOnly(input4)

//Program 4
function countDuplicates(arr: string[]) {

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > 0 && arr.indexOf(arr[i]) === i) { console.log(arr[i] + '=' + count) }
    }
}
let input5 = ["apple", "banana", "apple", "orange", "banana", "apple"] //output:apple=3 banana=2 orange=1
countDuplicates(input5)

//Program 5
function countDuplicatesOfOneItem(arr: string[], target: string) {

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++
        }
    }
    console.log(target + '=' + count)
}
let input6 = ["apple", "banana", "apple", "orange", "banana", "apple"] //output:apple=3
countDuplicatesOfOneItem(input6, 'apple')

//Program 6
function countOccurrenceOfWordCaseInsensitive(str: string) {

    let split = str.split(' ')
    let lower = split.map(x => x.toLowerCase())
    let target = 'java'
    let count = 0
    for (let i = 0; i < lower.length; i++) {
        if (lower[i] === target) {
            count++
        }
    }
    console.log(target + '=' + count)

}
let input7 = "java is a Java and is programming jAva language" //output:java=3
countOccurrenceOfWordCaseInsensitive(input7)

//Program 7
function countOccurrenceOfEachWordCaseInsensitive(str: string) {

    let split = str.split(' ')
    let lower = split.map(x => x.toLowerCase())
    for (let i = 0; i < lower.length; i++) {
        let count = 0
        for (let j = 0; j < lower.length; j++) {
            if (lower[i] === lower[j]) {
                count++
            }
        }
        if (count > 0 && lower.indexOf(lower[i]) === i) {
            console.log(lower[i] + '=' + count);
        }
    }
}
let input8 = "java is a Java and is programming jAva language" //output:java=3 is=2 a=1 and=1 programming=1 language=1
countOccurrenceOfEachWordCaseInsensitive(input8)

//Program 7
function countOccurrenceOfEachWord(str: string) {
    let split = str.split(' ')
    for (let i = 0; i < split.length; i++) {
        let count = 0
        for (let j = 0; j < split.length; j++) {
            if (split[i] === split[j]) {
                count++
            }
        }
        if (count > 0 && split.indexOf((split[i])) === i) {
            console.log(split[i] + '=' + count);

        }
    }
}
let input9 = "java is java programming" //output:java=2 is=1 programming=1
countOccurrenceOfEachWordCaseInsensitive(input9)

//Program 8
function mostRepeatedWord(str: string) {
    let words = str.split(' ')
    let maxCount = 0
    let maxWord = ""

    for (let i = 0; i < words.length; i++) {
        let count = 0
        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count
            maxWord = words[i]
        }

    }
    console.log(maxWord + '=' + maxCount)
}
let input10 = "java java selenium java selenium" //output:java=3
mostRepeatedWord(input10)

//Program 9
function firstNonRepeatedCharacter(str: string) {
    let char = str.split('')
    let result = char.find(x => char.indexOf(x) === char.lastIndexOf(x))
    console.log(result);
}
let input11 = 'aabccde' //output:b
firstNonRepeatedCharacter(input11)

//Program 10
function firstRepeatedCharacter(str: string) {

    for (let i = 0; i < str.length; i++) {
        let count = 0
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        if (count > 1) {
            console.log(str[i])
            break
        }
    }
}
firstRepeatedCharacter(input11) ////output:a

//Program 11
function countCharacters(str: string) {

    for (let i = 0; i < str.length; i++) {
        let count = 0
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        if (count > 0 && str.indexOf(str[i]) === i) {
            console.log(str[i] + '=' + count);
        }
    }
}
let input12 = "hello" //output: h=1 e=1 l=2 o=1
countCharacters(input12)

//Program 12
function removeDuplicateCharacter(str: string) {
    let result = str.split('').filter((x, index) => str.indexOf(x) === index).join('')
    console.log(result);
}
let input13 = "aabbccdde" //output:abcde
removeDuplicateCharacter(input13)

//Program 13
function reverseString(str: string) {
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    console.log(rev);
}
let input14 = "playwright" //output:thgirwyalp
reverseString(input14)

//Program 14
function reverseWords(str: string) {
    let rev = ""
    let word = str.split(' ')

    for (let i = word.length - 1; i >= 0; i--) {
        rev += word[i] + " "
    }
    console.log(rev);

}
let input15 = "I love Java" //output:Java love I
reverseWords(input15)

//Program 15
//output:I evol avaJ
function reverseEachWord(str: string) {
    let words = str.split(' ')
    let reverse = ""
    for (let i = 0; i < words.length; i++) {
        let rev = ""
        for (let j = words[i].length - 1; j >= 0; j--) {
            rev += words[i][j]
        }
        reverse += rev + " "
    }
    console.log(reverse);
}
reverseEachWord(input15)

//Program 16
//Output:avaJ evol I
function reverseWordAndEachWords(str: string) {
    let word = str.split(' ')
    let reverse = ""
    for (let i = word.length - 1; i >= 0; i--) {
        let rev = ""
        for (let j = word[i].length - 1; j >= 0; j--) {
            rev += word[i][j]
        }
        reverse += rev + " "
    }
    console.log(reverse);
}
reverseWordAndEachWords(input15)

//Program 17
function largestAndSecondLargestNumber(num: number[]) {

    let largest = num[0]
    let secondLargest = num[0]

    for (let i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            let temp = num[i]
            secondLargest = largest
            largest = temp
        }
    }
    console.log("largest: " + largest);
    console.log("second largest: " + secondLargest);


}
let input16 = [5, 8, 2, 10, 4, 23, 1] //output: largest: 23 second largest: 10
largestAndSecondLargestNumber(input16)

//Program 18
function findDuplicates(arr: number[]) {
    let duplicates = arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x))
    let result = [...new Set(duplicates)]
    console.log(result);

}
let input17 = [1, 2, 3, 2, 4, 1] //output:[ 1, 2 ]
findDuplicates(input17)

//Program 19
function removeDuplicatesAndPreserveOrder(str: string[]) {
    let result = str.filter((x, index) => str.indexOf(x) === index)
    console.log(result);

}
let input18 = ["B", "A", "C", "B", "A"] //output:["B","A","C"]
removeDuplicatesAndPreserveOrder(input18)

//Program 20
function findLongestWord(str: string) {
    let words = str.split(' ')
    let longestWord = ""
    let longestCount = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestCount) {
            longestCount = words[i].length
            longestWord = words[i]
        }
    }
    console.log(longestWord);

}
let input19 = "I love automation testing" //output:automation
findLongestWord(input19)

//Program 21
function findSmallestWord(str: string) {
    let words = str.split(' ')
    let shortestWord = ""
    let shortestWordSize = words[0].length
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestWordSize) {
            shortestWordSize = words[i].length
            shortestWord = words[i]
        }
    }
    console.log(shortestWord);
}
let input20 = "Hi i love automation testing" //output:I
findSmallestWord(input20)

//Program 22
//Method 1
function countVowels(str: string) {
    let word = str.toLowerCase()
    let count = 0
    let vowels = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            count++
            vowels += word[i]
        }
    }
    console.log(vowels);
    console.log("vowels count:" + count);
}
let input21 = "automation" //output: auoaio vowels count:6
countVowels(input21)

//Method 2
function countVowelsAndConsonents(str: string) {
    let char = str.toLowerCase().split('')
    let vowels = char.filter(x => 'aeiou'.includes(x)).join('')
    let count = vowels.length
    console.log("Vowels: " + vowels + " Vowels Count: " + count);

    let conso = char.filter(x => !"aeiou".includes(x)).join('')
    let consoCount = conso.length
    console.log("Consonents: " + conso + " Consonents Count: " + consoCount);

}
//output: Vowels: auoaio Vowels Count: 6 Consonents: tmtn Consonents Count: 4
countVowelsAndConsonents(input21)

//Method 3
function countConsonents(str: string) {
    let conso = ""
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z' && str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            count++
            conso += str[i]
        }
    }
    console.log("Consonents: " + conso + " Consonents Count: " + count);

}
//output: Consonents: tmtn Consonents Count: 4
countConsonents(input21)

//Program 23
function seperateVowelsAndConsonent(str: string) {
    let word = str.toLowerCase()
    let vowels = ""
    let cons = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vowels += word[i]
        } else if (word[i] >= 'a' && word[i] <= 'z') {
            cons += word[i]
        }
    }
    console.log(`vowels: ${vowels} consonents: ${cons}`)
}
let input22 = "Hello" //vowels: eo consonents: hll
seperateVowelsAndConsonent(input22)

//Program 24
function findShortestString(str: string[]) {
    let wordLength = str[0].length
    let smallestStr: string[] = []

    for (let i = 0; i < str.length; i++) {
        if (str[i].length < wordLength) {
            wordLength = str[i].length
            smallestStr = [str[i]]
        } else if (str[i].length === wordLength) {
            smallestStr.push(str[i])
        }
    }
    console.log(smallestStr)
}
let input23 = ["java", "typescript", "sql", "playwright", "api"] //[ 'sql', 'api' ]
findShortestString(input23)

//Program 25
function findLongestString(str: string[]) {
    let longestWord: string[] = []
    let wordLength = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > wordLength) {
            wordLength = str[i].length
            longestWord = [str[i]]
        } else if (str[i].length === wordLength) {
            longestWord.push(str[i])
        }
    }
    console.log(longestWord)
}
findLongestString(input23) //[ 'typescript', 'playwright' ]

//Program 26
function sortStringsAlphabetically(str: string[]) {

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] < str[j]) {
                let temp = str[i]
                str[i] = str[j]
                str[j] = temp
            }
        }
    }
    console.log(str)
}
let input24 = ["banana", "apple", "orange"] //outpu:  'apple', 'banana', 'orange' ]
sortStringsAlphabetically(input24)

//Program 27
function sortStringsByLength(str: string[]) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = 0; j < str.length - 1 - i; j++) {
            if (str[j].length > str[j + 1].length) {
                let temp = str[j]
                str[j] = str[j + 1]
                str[j + 1] = temp
            }
        }

    }
    console.log(str);
}
let input25 = ["playwright", "java", "api", "selenium"]
sortStringsByLength(input25)

//Program 28
function reverseEveryString(str: string[]) {

    let reverse: string[] = []
    for (let i = 0; i < str.length; i++) {
        let rev = ""
        for (let j = str[i].length - 1; j >= 0; j--) {
            rev += str[i][j]
        }
        reverse.push(rev)
    }
    console.log(reverse);
}
let input26 = ["hello", "world"] //output:[ 'olleh', 'dlrow' ]
reverseEveryString(input26)

//Program 29
function convertFirstLetterToUppercase(str: string[]) {
    let words: string[] = []
    for (let i = 0; i < str.length; i++) {
        let result = str[i][0].toUpperCase() + str[i].slice(1)
        words.push(result)
    }
    console.log(words);
}
convertFirstLetterToUppercase(input26) //[ 'Hello', 'World' ]

//Program 30
function findStringsStartingWithAVowels(str: string[]) {
    let vowel: string[] = []
    let vowels = 'aeiou'
    for (let x of str) {

        if (vowels.includes(x[0].toLowerCase())) {
            vowel.push(x)
        }
    }
    console.log(vowel);

}
let input27 = ["apple", "banana", "orange", "grape"] //output:[ 'apple', 'orange' ]
findStringsStartingWithAVowels(input27)

//Program 31
function findStringsEndingWithAParticularCharacter(str: string[]) {
    let result: string[] = []
    let lastchar = 'e'
    for (let i = 0; i < str.length; i++) {

        if (str[i][str[i].length - 1] === lastchar) {
            result.push(str[i])
        }

    }
    console.log(result);
}
findStringsEndingWithAParticularCharacter(input27) //[ 'apple', 'orange', 'grape' ]

//Program 32
function removeEmptyStrings(str: string[]) {
    let word: string[] = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
            word.push(str[i])
        }
    }
    console.log(word);

}
let input28 = ["hello", "", "world", "", "playwright"] //[ 'hello', 'world', 'playwright' ]
removeEmptyStrings(input28)

//Program 33
function groupStringsByLength(str: string[]) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i].length > str[j].length) {
                let temp = str[j]
                str[j] = str[j + 1]
                str[j + 1] = temp
            }
        }
    }
    for (let k = 0; k < str.length; k++) {
        console.log(str[k].length + ':' + str[k]);
    }
}
let input29 = ["hi", "hello", "java", "api"] //output:5:hello 4:java 3:api 2:hi
groupStringsByLength(input29)

//Program 34
function removeStringsContainingAParticularCharacter(str: string[]) {
    let char = 'a'
    let arr: string[] = []
    for (let i = 0; i < str.length; i++) {
        if (!str[i].includes(char)) {
            arr.push(str[i])
        }
    }
    console.log(arr);
}
let input30 = ["apple", "banana", "orange", "grape"] //output:[]
removeStringsContainingAParticularCharacter(input30)

//Program 35
function mergeTwoArraysWithoutDuplicates(str1: string[], str2: string[]) {

    let array = str1.concat(str2)
    let result = array.filter((x, index) => array.indexOf(x) === index)
    console.log(result);

}
let arr1 = ["apple", "banana"]
let arr2 = ["banana", "orange"]
mergeTwoArraysWithoutDuplicates(arr1, arr2) //output:[ 'apple', 'banana', 'orange' ]

//Program 36
function findSecondLongestString(str: string[]) {
    let firstLargest = str[0]
    let secondLargest = str[0]
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > firstLargest.length) {

            secondLargest = firstLargest
            firstLargest = str[i]


        } else if (str[i].length > secondLargest.length && str[i].length < firstLargest.length) {
            secondLargest = str[i]
        }
    }
    console.log(secondLargest)
}
let input31 = ["java", "playwright", "selenium", "api"] //selenium
findSecondLongestString(input31)

//Function 37
function toggle(str: string) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    console.log(result)
}
let input32 = "HeLLo" //output:hEllO
toggle(input32)

//Program 38
function stringCompression(str: string) {
    let split = str.split('')
    let result: string[] = []
    let count = 1
    for (let i = 0; i < split.length; i++) {
        if (split[i] === split[i + 1]) {
            count++
        }
        else {
            let ans = split[i] + count
            result.push(ans)
            count = 1 //reset count to 1
        }
    }
    console.log(result.join(''));
}
let input33 = "aaabbccccaa" //output:a3b2c4a2
stringCompression(input33)

//Program 39
function findMissingNumber(str: number[]) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== i + 1) {
            console.log(i + 1);
            break
        }
    }
}
let input34 = [1, 2, 3, 5] //output: 4
findMissingNumber(input34)




