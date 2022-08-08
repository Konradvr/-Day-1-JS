console.log("hello world")

//this is a comment 

// variables - named storage

// we only use let and const - use const whenever possible 

const user = "marco"
console.log(user); // console.(table, warn, time , error)

// declaring a variable --> just creating a variable without a value 

let mouse; // --> declaring a variable 
mouse = "jerry" // --> giving the variable a value --> is not very ussually 
console.log(mouse)

// we want to use camelCase 


// data types 

// primitives and objects 
// primitive data types are: number, string, null, undefined, Symbol 

// we can check the type by using "typeof"
// js is dynamically typed 
let num = "42" 
console.log(typeof num)
num = 23 
console.log(typeof num) //"script.js:30" shows uu where this code was written in the Script 

// Number 

const distance = 7000 
const price = 19.99 //floating type numbers "."

console.log("hello" * 3) // NaN = not a Number --> uu can do it in Python 

// mathematical operators 

console.log(4 + 5)
// +, -, *, / 

// % - modulo --> remainder operator (5 % 2 = 1; 6 % 2 = 0)

let x = 1 
// primitives cant change directly 
x = x + 1 
x += 2 //short way 
x++ //++ is just adding 1 --> x-- 
console.log(x)
console.clear() // cearing the console 

// Strings 
//'', "" 

const name = '' // empty string 
const greeting = 'hello' //
// conncet / concatenate strings -> '+'

console.log(greeting + ' ' + 'marco')
//alternative: using backticks 
console.log(` ${greeting} marco`)

// string properties and methods 

console.log(greeting[greeting.length - 1 ]) 
// access the last char of greeting eaven when uu change it -> -1 bc the index starts by zero 

// using charAt()
console.log(greeting.charAt(0))

// another method: indexOf() -> kinda the opposite of charAt()
//this gives us the index of the first occurence  of a character 
console.log(greeting.indexOf("l")) // -> 2 
console.log(greeting.indexOf("x")) // -> -1 bc the letter is not existing in the value of the variable 
console.log(greeting.lastIndexOf("l")) // -> checks if there are multiple "l" in the string  

// if uu want to check if a character is in the stribg uu should use: includes()
console.log(greeting.includes('l')) // -> true 
console.log(greeting.includes('x')) // -> false
console.clear()

//slice() -> returns a substring within a given range 

const word = "rickandmorty"

console.log(word.slice(0, 2)) // -> ri 

// toUpperCase() 

console.log(word.toUpperCase()) // -> RICKANDMORTY
console.log(word) // -> rickandmorty -> strings are immutable (cannot change only reassigned 

console.log(word)

let username = "rick" 

// get the first charakter 
// capitilazie it 
// add the rest of the word 
username = username[0].toUpperCase() + username.slice(1,4)
console.log(username)

console.clear()

// booleans, undefined and null 

// booleans 

// booleans operators 
console.log(4 > 3) // -> true 
console.log(4 > 5) // -> false 
// > larger than 
// < less than 
// >= larger + equal 
// <= less + equal 

//equality 
console.log(5 == "5") // -> true
//strictly equal   
console.log(5 === "5") // -> false
// logical operators 
// && -> logical and 
// || -> or 

console.log(5 > 3 && 4 < 6) // -> true 
console.log(5 > 3 && 4 > 6) // -> false 

console.log(5 > 3 || 4 < 6) // -> true 
console.log(5 > 3 || 4 > 6) // -> true 

//truthly and falsy value 

//falsy values are: "", 0, undefined, null, NaN 


let password = "dd" 

if(password) {
    console.log("password is set")
}


password = "" 

if(!password) {
    console.log("password is not set")
}


//conditionals 

// if (else) statements 

/* 

const age = prompt("what is your age") //prompt() the website ask uu how old are uu and u

if (age >= 18){
    console.log("you are allowed to drive") 
} else if (age == 17) { 
    console.log("you can drive with an adult") 
} else {
    console.log("you are to young to drive")
}

//uu cant use === bc does it dont have the same type of value or uu put Number(prompt("what is your age"))

*/ 

// switch case 
/* 
const language = ""

switch (language) {
    case "french": 
    console.log("bonjour");
    break;
    case "english": 
    console.log("Hello");
break;
    case "italian":
        console.log("ciao");
        break; 

    default
}
*/ 


console.clear()

// iterations 

// log the number one to ten 

for (let i = 1; i < 11; i++){
    console.log("i")
}; 

//while loop 

i = 1; 
while(i < 11){
    console.log(i)
    i++
}

//more common use 

/*

password = prompt("enter your passwortd")
const correctPassword = "123" 
while (password !== correctPassword){
    password = prompt("enter your password" ) 
}
//this line is reached if the password is correct 

alert("acces granted") 

*/



