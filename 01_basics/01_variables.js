const accountId = 123445
let accountEmail = "xyz@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; //undefined

//accountId = 2     //not allowed

accountEmail = "abc@xyz"
accountPassword = "213424"
accountCity = "Oslo"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
var is not preferred to use due to issue in block scope and functional scope
*/