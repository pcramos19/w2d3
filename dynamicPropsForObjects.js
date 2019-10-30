let studentObj = {
  name: "victor",
  age: 35,
  salary: 40000
};

for (var i = 0; i < 10; i++) {
  studentObj["prop" + i] = Math.random();
}

for (var i = 0; i < 10; i++) {
  delete studentObj["prop" + (!(i % 2) && i)];
}

console.log(studentObj)

// for (var i = 0; i < 10; i++) {
//   delete studentObj["prop" + i];
// }
