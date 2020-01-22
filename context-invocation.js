// when called using .apply and passing the teacher, now "this" is teacher, yeah!
// the parameters are sent to the function via an array as second parameter of apply()
function report(separator = "*", nSeparatorItems = 50) {
//   console.log(this);

  console.log(separator.repeat(nSeparatorItems));
  console.log(
    `${this.name} has ${this.salary} eur. With taxes this is ${this.salary *
      1.21}`
  );
  console.log(separator.repeat(nSeparatorItems));
}

let teacher = {
  name: "Germán Alvarez",
  salary: 100000,
  courses: ["webdev", "data"],
  address: { city: "mad" }
};

let doctor = {
  name: "Dani Vicario",
  salary: 80000,
  specialty: "brain"
};

// fn.apply(thisValue, [params...])

// report.apply(teacher, ["/", 100]);
let reportForTeacher = report.bind(teacher)

// this will provide the "this" value as teacher forever
reportForTeacher()

// report.call(teacher, "*");
// // report.apply(doctor)
