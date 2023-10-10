let score = "45xyz"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

//number "33" => 33
//"123sdf" => NaN
//null => 0
//undefined => NaN
//true => 1; false => 0

let isLoggedIn = "mk"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//true => 1; false => 0
//"" => false
//"mk" => true

let someNumber = 34
let stringNumber = String(someNumber)
console.log(stringNumber)  //"34"
console.log(typeof stringNumber)  //string 