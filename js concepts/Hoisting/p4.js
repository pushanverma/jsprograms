
console.log(a) 
console.log(getName,"...printing fn--before")
console.log(getName(),"...calling fn--before")

// var a=7;

function getName(){
    console.log("Avengers");
}

console.log(a)
console.log(getName,"...printing fn--after")
console.log(getName(),"...calling fn--after")


// 💻 O/p ->  
// undefined
// [Function: getName] ...printing fn--before
// Avengers
// undefined ...calling fn--before
// 7
// [Function: getName] ...printing fn--after
// Avengers
// undefined ...calling fn--after