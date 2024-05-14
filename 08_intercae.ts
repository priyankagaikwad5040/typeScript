interface IProduct{
    id :number;
    name :string;
    description : string;
    price :number;
    print(): void;
}


let productObj : IProduct = {
id: 0,
name:"",
description:"",
price : 0,
 print(): void{
    console.log(`this id function implementation of interface`);
    
 }
};

console.log(productObj);
