var Employee = /** @class */ (function () {
    function Employee(empName, empId, Dept) {
        this.empName = empName;
        this.empId = empId;
        this.Dept = Dept;
        this.empName = empName;
        this.empId = empId;
        this.Dept = Dept;
    }
    Employee.prototype.show = function () {
        return this.empName, this.empId, this.Dept;
    };
    return Employee;
}());
var obj = new Employee("Nuts", 2013, "Loan");
obj.show();
