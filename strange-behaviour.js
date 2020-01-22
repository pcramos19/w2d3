var value = 500;
var obj = {
  value: 0,
  increment: function() {
    this.value++;

    function innerFunction() {
      console.log(this.value);
    };

    innerFunction(); // here "this" is Window
    innerFunction.apply(this); // there "this" is obj
    console.log("test2", this.value);
  }
};

obj.increment()