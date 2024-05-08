class Car {

    // Properties
    brand: string;
    model: string;
    year: number;

    // constructor
    constructor(brand: string, model: string, year: number) {
       
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // method
    displyCarInfo(): void {
        console.log(`This is a ${this.year} ${this.brand} ${this.model}`);   
    }
}


// Creating the instance of car class

const objCar = new Car('TATA', 'Harrier', 2023);

objCar.displyCarInfo();