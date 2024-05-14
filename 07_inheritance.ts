class Electronic_device{
    isOn : boolean;
    name : string;
    constructor(name : string){
        this.isOn=false;
        this.name =name;
    }
     turnOn() : void {
        this.isOn=true;
        console.log(`${this.name} is turn On`);
        

     }
     turnOff() : void {
        this.isOn=false;
        console.log(`${this.name} is turn Off`);
        

     }

}


class Laptop extends Electronic_device{
    battery_level : number;
    constructor(name : string,battery_level : number ){
        super(name);
        this.battery_level=battery_level;
    }
    battery_check(): void {
        console.log(`${this.battery_level} is of ${this.name}`);
        
    }
}


class Phone extends Electronic_device{
    model :number;
    constructor(name: string,model :number){
        super(name);
        this.model=model;
    }
    makecall(number: string): void{
console.log(`${this.model} of number ${this.name}`);

    }
}
var lap = new Laptop("HP",56);
lap.turnOn();
lap.battery_check();


let phone=new Phone("one plus",64);
phone.makecall("9856437623");
phone.turnOff();
