class Student {
    firstName: string ;
    email :string;
    pinCode : number;
    constructor( firstName : string,email :string ,pinCode : number){
        this.firstName=firstName;
        this.email=email;
        this.pinCode=pinCode
    }
    display() : void {
        console.log(`${this.firstName}  ${this.email} ${this.pinCode}`);
        
    }
}
const stdObj=new Student("Tony","tony.kuntla@gmail.com",431027);
stdObj.display();


