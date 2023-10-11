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