var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastname = lastName;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.firstName).concat(this.lastname);
    };
    return Person;
}());
// create object of Person class 
var person = new Person('1210', 'Rocky', 'Bhai');
console.log(person.getFullname());
// example for Private access modifiers
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastname = lastName;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.firstName).concat(this.lastname);
    };
    return Person;
}());
// create object of Person class 
var person = new Person('1210', 'Rocky', 'Bhai');
console.log(person.getFullname());
// Example for protected access modifiers 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test.prototype.getEmpolyeeSn = function () {
        return "Employee SN : ".concat(this.sn);
    };
    return Test;
}(Employee));
