function addTo(s1) {
  return function(s2) {
    return s1 + s2;
  };
}

let add10 = addTo(10)
add10(50)

function setDOMElInnerHTML(DOMEl) {
  return function(innerHTML) {
    DOMEl.innerHTML = innerHTML;
  };
}

// let's use the curry
// this variable pre-configures the value that will be added to anything 
let addTo5 = addTo(5)

// this will yield 15 due to the curry usage :)
addTo5(10)

// let domEl = setDOMElInnerHTML(document.createElement("div"));

// domEl("hello world");
// domEl("<span>hola</span>");

function generateCalculator(type = "sum") {
  switch (type) {
    case "sum":
      return function(a, b) {
        return a + b;
      };

    case "sub":
      return function(a, b) {
        return a - b;
      };
  }
}

let myCalculatorForSums = generateCalculator("sum")
let myCalculatorForSubtraction = generateCalculator("sub")

// console.log(myCalculatorForSubtraction(10, 3))

let DIVDOMEl = document.createElement("div")
DIVDOMEl.innerHTML = myCalculatorForSubtraction(100, 3)
document.body.appendChild(DIVDOMEl)
