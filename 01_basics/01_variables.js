const accountId=144553
let accountEmail="tathagata12@gmail.com"
var accountPassword="12345"
accountCity="Kolkata"
let accountState;
//accountId=2//not  allowed
/*
prefer not to use var because of issue in block scope and functional scope
*/


accountEmail="tathag23@gmail.com"
accountCity="Bengaluru"
console.log(accountId);
console.log(accountPassword);
console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState);