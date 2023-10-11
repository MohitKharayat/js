//Primitive
//7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)//FALSE

//Non Primitive (Reference)
//Array, Objects, Functions

const heros = ["batman","superman","flash"]

let myObj = {
    name: "Mohit",
    age: 22
}

const myFunction = function(){
    console.log("Namaste")
}

/* 
Type of val                   Result

Undefined                     undefined
Null                          object
Boolean                       boolean
Number                        number
String                        string
Object                        object

*/

// Stack(Primitive) , Heap(Non-Primitive)
let myName = "mohit"
let anotherName = myName//copy
anotherName = "batman"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "abc@xyz",
    name:"max"
}

let userTwo = userOne//reference
userTwo.email="asdfg@12345"

console.log(userOne)
console.log(userTwo)
