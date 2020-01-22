// arguments
// apply, call
// closures
// functions as expressions

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// //formal parameters
// function sumWithArrayAsSingleParam(numbers) {
//   console.log(`Is this an array? ${Array.isArray(numbers)}`);
//   console.log(typeof numbers);

//   //way 1 - using a for loop
//   // let acum = 0;

//   // for (let i = 0; i < numbers.length; i++) {
//   //   acum += numbers[i];
//   // }

//   // return acum;

//   //way 2 - using a reducer function
//   //   return numbers.reduce((ac, cu) => ac + cu, 0);

//   //way 3 - using a forEach loop
// //   let acum = 0;

// //   numbers.forEach(element => {
// //       acum += element
// //   });

// //   return acum;
// }

// // arguments
// let output = sumWithArrayAsSingleParam([
//   1,
//   2,
//   3,
//   4,
//   54,
//   54,
//   54,
//   54,
//   54,
//   54,
//   54,
//   54,
//   54,
//   5
// ]);
// console.log(output);

//no formal parameters, we use *ONLY* the arguments reserved keyword
function sum() {
  let acum = 0;

  [...arguments]
    // .filter(arg => typeof arg === "number")
    // .filter(arg => arg >= 100)
    .filter(arg => typeof arg === "number" && arg >= 100)
    .forEach(arg => {
      acum += arg;
    });

  return acum;
  //   console.log(acum);

  //   let acum = 0;

  //   for (let i = 0; i < arguments.length; i++) {
  //     acum += arguments[i];
  //   }

  //   console.log(acum);
}

// arguments
let output = sum(...Array(100).fill().map(x => randomInt(100, 1000000)));
let output = sum("flor", 5, "gabri", 100, "edu", 1, 10, 120);
console.log(output);

// console.log(sum("flor", 5, "gabri", 100, "edu", 1, 10, 120))

