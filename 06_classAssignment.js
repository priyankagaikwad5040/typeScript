var Student = /** @class */ (function () {
    function Student(firstName, email, pinCode) {
        this.firstName = firstName;
        this.email = email;
        this.pinCode = pinCode;
    }
    Student.prototype.display = function () {
        console.log("".concat(this.firstName, "  ").concat(this.email, " ").concat(this.pinCode));
    };
    return Student;
}());
var stdObj = new Student("Tony", "tony.kuntla@gmail.com", 431027);
stdObj.display();
