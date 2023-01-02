//📌 When we are accessing variable and function before they are declared.

console.log(a)
console.log(getName)

var  a=7;

function getName(){
    console.log("Avengers")
}

// 💻 O/p ->  
// undefined
// [Function: getName]