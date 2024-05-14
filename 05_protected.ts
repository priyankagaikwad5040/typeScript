// Example for protected access modifiers 

class Employee {
    protected sn : string;

}

class Test extends Employee {

    getEmpolyeeSn() {
        return `Employee SN : ${this.sn}`
    }
}