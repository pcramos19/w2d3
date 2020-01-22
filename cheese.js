class Cheese {
    constructor(type = "parmesan") {
        // type belongs to the object *NOT* to its prototype
        // as it must be different for each cheese
        this.type = type
    }

    // eat belongs to the Cheese prototype. Every cheese will have it :)
    eat() {
        console.log("i have eaten this " + this.type + " cheese")
    }
}

let parmesan = new Cheese()
let padano = new Cheese("padano")

parmesan.eat()
padano.eat()
