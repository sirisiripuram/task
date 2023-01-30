function Person() {
    this.name = 'rama',
    this.age = 26,
    this.sayName = function () {

       
        console.log(this.age);

        function innerFunc() {

            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();