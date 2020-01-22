// // var scope (override)
// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2;  // same variable!
//     console.log(x);  // 2
//   }
//   console.log(x);  // 2
// }

// // let scope (different scope)
// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2;  // different variable
//     console.log(x);  // 2
//   }
//   console.log(x);  // 1
// }

// //////

// window object pollution

// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global"
// console.log(this.y); // undefined

// /////////////////////////////////////////////////

// variable override

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the if-block

//   console.log(a);  // 11
//   console.log(b);  // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// /////////////////////////////////////////////////

// due to using var, `i` is not scoped to the loop
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log(i) <== 10

// // due to using let, `i` is scoped to the loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log(i) <== Uncaught ReferenceError: i is not defined

// /////////////////////////////////////////////////

// let sampleObject = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   isActive: true,
//   salary: 90000,
//   currency: "£",
//   address: {
//     street: "1 Canada Square",
//     city: "London",
//     postcode: "4SE10NJ",
//     country: "UK"
//   }
// };

function a(txt) {
    let date = new Date()

    function b(txt) {
        console.log(txt)
    }

    b(`${txt} ---- ${date}`)
}

