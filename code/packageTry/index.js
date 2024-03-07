let lowerCase = require("lower-case").lowerCase;
function greet(name) {
    console.log(`${lowerCase(`Hello ${ name }, welcome to coding!`)}`);
}
module.exports=greet;
greet("rishi");