// apply, call

let studentObj = {
  name: "victor",
  age: 35,
  salary: 40000
};


for (var i = 0; i < 10; i++) {
    studentObj["prop" + i] = Math.random()
}

let sunObj = {
  name: "alpha centauri",
  age: 400002020202,
  constellation: "gemini"
};

// function printValues(obj) {
//     console.log(obj.name, obj.age)
// }

// printValues(studentObj)

function printValuesWithApply(nTimes, txt) {
  (this.constellation !== undefined) && console.log(`${txt} ${this.constellation}`)

  for (var i = 0; i < nTimes; i++) {
    console.log(this.name, this.age);
  }
}

// printValuesWithApply.apply(studentObj, [2, "hola"]);
printValuesWithApply.apply(sunObj, [2, "hola"]);
// printValuesWithApply.call(studentObj, 2);

