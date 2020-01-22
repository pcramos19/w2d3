// function as a statement
function salaryWithTaxes(baseSalary, taxes) {
    return baseSalary * (1 + (taxes / 100))
}

// function as a expression
let salaryWithTaxes = function (baseSalary, taxes) {
    return baseSalary * (1 + (taxes / 100))
}

// function as a expression with arrow function
let salaryWithTaxes = (baseSalary, taxes) => {
    // multiline implementation: you need to add curly braces + explicit return
    return baseSalary * (1 + (taxes / 100))
}


salaryWithTaxes(20000, 21)