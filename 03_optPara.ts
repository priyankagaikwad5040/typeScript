
// optional parameter


function sayHello(name?: string) {
    if (name) {
        console.log(`Hello, ${name} !`);
    } else {
        console.log(`Hello !!!!`);
        
    }  
}

sayHello(); //  

sayHello('jack') //