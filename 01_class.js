var Car = /** @class */ (function () {
    // constructor
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // method
    Car.prototype.displyCarInfo = function () {
        console.log("This is a ".concat(this.year, " ").concat(this.brand, " ").concat(this.model));
    };
    return Car;
}());
// Creating the instance of car class
var objCar = new Car('TATA', 'Harrier', 2023);
objCar.displyCarInfo();
