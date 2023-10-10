let score = "45xyz"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber); //NaN

//number "33" => 33
//"123sdf" => NaN
//null => 0
//undefined => NaN
//true => 1; false => 0

let isLoggedIn = "mk"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//true => 1; false => 0
//"" => false
//"mk" => true

let someNumber = 34
let stringNumber = String(someNumber)
//console.log(stringNumber)  //"34"
//console.log(typeof stringNumber)  //string 

/* ******************Operations************* */
let value = 3
let negValue = -value
//console.log(negValue) //-3
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hi"
let str2 = " Mohit"
let str3 = str1+str2
// console.log(str3) //Hi Mohit

// console.log("2"+2) //22
// console.log(2+"2") //22
// console.log("2"+"2") //22
// console.log("1"+2+2) //122
// console.log(1+2+"2") //32

// console.log(+true) //1
// console.log(+"") //0

let gameCounter = 100
gameCounter++;
console.log(gameCounter)

