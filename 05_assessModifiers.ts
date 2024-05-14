class Person {
    // properties 
    private ssn: string;
    private firstName : string;
    private lastname : string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastname = lastName;
    }

    getFullname() : string {
        return `${this.firstName}${this.lastname}`
    }

}


// create object of Person class 

const person = new Person('1210', 'Rocky', 'Bhai');

console.log(person.getFullname());
/*
// example for Private access modifiers
class Person {
    // properties 
    private ssn: string;
    private firstName : string;
    private lastname : string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastname = lastName;
    }

    getFullname() : string {
        return `${this.firstName}${this.lastname}`
    }

}


// create object of Person class 

const person = new Person('1210', 'Rocky', 'Bhai');

console.log(person.getFullname());



*/