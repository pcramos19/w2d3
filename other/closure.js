function addCurry(val) {
    return function (val2) {
        return val + val2
    }
}

let add5 = addCurry(5)
// // add5(100)

// addCurry(5)(100)

// closure
function a(v1, v2, operationType) {
  let subtract = function(p1, p2) {
    return p1 - p2;
  };

  // function as a expression
  /* let subtract = (exp) ? function(p1, p2) {
    return p1 - p2;
  } : function(p1, p2) {
    return p1 - p2;
  } */

  switch (operationType) {
    // this function `sum` can be used here as per hoisting
    case "add":
      return `resultado es: ${sum(v1, v2)}`;
      break;

    case "sub":
      return `resultado es: ${subtract(v1, v2)}`;
      break;
  }

  // function as a statement
  function sum(p1, p2) {
    return p1 + p2;
  }
}

console.log(a(1, 10, "add"));
