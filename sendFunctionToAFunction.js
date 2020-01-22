function sayHelloNTimes(nTimes, callback) {
    function sayHello() {
        console.log("hello!")
    }

    for (let i = 0; i < nTimes; i++) {
        sayHello()
    }

    if (callback !== undefined)   callback()
}

// sayHelloNTimes(5, )

// fernando way
function gameOver() {
    console.log("hello is done :)")
}

sayHelloNTimes(10, gameOver)


// 
sayHelloNTimes(10, function () {
    console.log("hello is done :)")
})

sayHelloNTimes(10, () => {
    console.log("hello is done :)")
    
})