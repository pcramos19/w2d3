// this study in a defined function at root level -> this will be the window object
// function test() {
//   console.log("i am the test function");
//   console.log(this);
// }

// test();

function multiplyAll() {
    let output = 1;

    debugger

    // let enhancedArgumentsArr = [...arguments]

    for (let i = 0; i < arguments.length; i++) {
        output *= arguments[i]
    }

    return output
}

console.log(multiplyAll(2, 4, 2));
