enum Gender {
    Male,
    Female
}


console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);

enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}


console.log(WeekEnds[6]);
console.log(WeekEnds[7]);


// Numeric Enum 


enum OrderStatus {
    Pending = 1,
    Processing = 2,
    Shipped = 3,
    Deliverd = 4
}


let myorder : OrderStatus = OrderStatus.Shipped;

console.log(myorder);


// String Enum 


enum PaymentMethod {
    CreditCard = 'credit_card',
    DebitCard = 'debit_card',
    PayPal = 'paypal'
}

let payment : PaymentMethod = PaymentMethod.DebitCard;

console.log(payment);