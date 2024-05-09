// as

var input : any = prompt('Enter a number');

let userNumber =  input as number ;

let result = userNumber * 2;

console.log('using as' ,result);


// <>


var userinput : any = prompt('Enter a number');

let userNumbers =  <number>userinput ;

let results = userNumbers * 4;

console.log('uisng <>', results);