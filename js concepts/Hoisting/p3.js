//📌 Explaining diffrence b/w undefined and not-defined

console.log(a)
console.log(getName)

// var  a=7;

function getName(){
    console.log("Avengers")
}

// 💻 O/p ->  
//  a is not defined




// 📌 The reason is , before running any code in js , js gives every variable a special("undefined"),
// It tells that there is some variable present , but cant tell what is the data type 

// But ,

// when you try to access a variable which is not even declared, then it gives you the error("not defined").