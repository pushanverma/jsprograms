//📌 Looking how arrow functions and normal functions react , when called before and after declarartion 


console.log(a) 
console.log(getName,"...printing fn--before")
console.log(getName(),"...calling fn--before")
console.log(getName2(),"...calling fn--before")


var a=7;

// Instead of Normal function , we are making a arrow function (it even behaves diffrently , 
// when var is replaced with let/const)

var getName=()=>{
    console.log("Avengers");
}

var getName2= function (){
    console.log("Avenegers :Endgame")
}

// 💻 O/p ->  
// undefined
// undefined ...printing fn--before
// TypeError: getName is not a function


// 📌 Point to remember is, arrow function behaves like a "variable" to Global execution context(syntax-"var getName=()=>{}" ) ,it stores "undefined" in memory execution phase
//  whereas 
// Normal function behaves like a function(syntax- "function getName()" , it stores "whole function", in the memory execution phase)


// 👉We miss understood , that arrow function is just another way to write function in javascript , 
// but we are wrong , 
// it behaves like a variable , always remember 


// 📌  There is another method of writing function ,(syntax-"var getName2= function (){ }"), this also 
// behaves just like arrow function , it stores undefined



