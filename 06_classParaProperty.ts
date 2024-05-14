class Employee{
    public constructor(private empName : string, public empId : number ,protected Dept : string){
        this.empName=empName;
        this.empId=empId;
        this.Dept=Dept;
    }
    public show() : string | number{
        return this.empName,this.empId,this.Dept;
    }
}

const obj=new Employee("Nuts",2013,"Loan");
obj.show();

