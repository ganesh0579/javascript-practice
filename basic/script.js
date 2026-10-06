alert("Hello, this is alert function");
let ans=prompt("Hello, this is prompt function");
confirm("Hello, this is confirm function");
console.log(ans);
console.log(typeof ans)
console.log("Hello, World!");
let uname = "GANESH";
console.log("using concatenation :My name is " + uname);
console.log(`using backticks :My name is ${uname}`);
console.log("using template literals :My name is ${uname}"); //it will not work because it is not in backticks
console.log(`${unames}`); //it will print the value as undefined because the variable is declared after this line
console.log(`${upass} is my password`); //it used let keyword so it will not print the value because it is declared after this line it is in temporal dead zone
console.log(`The value of pi is ${pi}`); // it used const keyword so it will not print the value because it is declared after this line it is in temporal dead zone
var unames = "mahi";
let upass = "1234";
const pi = 3.14;
