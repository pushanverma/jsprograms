// 📌 All varibales inside a function

// function getDetails(){
//     var a=1;
//     let b="hello"
//     const c="pushanverma"
//     console.log(a,"....a inside function")
//     console.log(b,"....b inside function")
//     console.log(c,"....c inside function")
// }

// getDetails();

// console.log(a,"....a outside function ")
// console.log(b,"....b outside function ")
// console.log(c,"....c outside function ")

// 💻 O/p-->(we have limited the scope of var , also even though it has function scope , )
// 1 ....a inside function
// hello ....b inside function
// pushanverma ....c inside function
// ReferenceError: a is not defined








// 📌 var varibale outside a function, let and const inside

// var a=1;

// function getDetails(){
//     let b="hello"
//     const c="pushanverma"
// }

// console.log(a,"....a")
// console.log(b,"....b")
// console.log(c,"....c")


// 💻 O/p-->(only var is accessible , and prints its value , since let and const are block scoped they are not available outside getDetails function)
// 1
// ReferenceError: b is not defined




// 📌 let,var varibale outside a function,const inside

// let b="hello";
// var a=1;
// function getDetails(){
//     const c="pushanverma"
// }

// console.log(a,"....a")
// console.log(b,"....b")
// console.log(c,"....c")

// 💻 O/p-->
// 1 ....a
// hello ....b
// ReferenceError: c is not defined



// 📌 let,var,const  varibale outside a function,console outside the function and inside the function

// var a=1;
// let b="hello";
// const c="pushanverma"

// function getDetails(){
//     console.log(a,"....a inside")
//     console.log(b,"....b inside")
//     console.log(c,"....c inside")
// }

// getDetails();

// console.log(a,"....a outside")
// console.log(b,"....b outside")
// console.log(c,"....c outside")






