// optional parameter
function sayHello(name) {
    if (name) {
        console.log("Hello, ".concat(name, " !"));
    }
    else {
        console.log("Hello !!!!");
    }
}
sayHello(); //  
sayHello('jack'); //
