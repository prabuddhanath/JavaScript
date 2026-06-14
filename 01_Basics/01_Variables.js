const account_ID = 12345
let account_email = "prabuddha@google.com"
var account_password = "123"
account_City = "Kolkata"
let accountState;
//account_ID = 100  //not allowed

console.log(account_ID)

account_email = "pr@gmail.com"
account_password = "100100"
account_City = "Bangalore"

/*
Prefer not to use var
because of use in block scope and functional scope.
*/

console.table([account_email, account_password, account_City, accountState])
