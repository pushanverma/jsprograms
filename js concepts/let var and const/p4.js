var a=1;
let b="hello"
const c="pushanverma"


console.log("Outside the Function-Top ")
console.log(a,"....a")
console.log(b,"....b")
console.log(c,"....c")


function getDetails()
{
console.log("Inside the Function ")
console.log(a,"....a")
console.log(b,"....b")
console.log(c,"....c")
}

getDetails();

console.log("Outside the Function-Bottom")
console.log(a,"....a")
console.log(b,"....b")
console.log(c,"....c")