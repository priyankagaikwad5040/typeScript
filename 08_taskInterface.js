var task1 = {
    title: "Finish project report",
    // description :"",
    status: false,
};
console.log(task1);
var task2 = {
    title: "Buy Groceries",
    description: "Milk ,bread,eggs",
    status: false,
};
console.log(task2);
var task3 = {
    title: "Clean Room",
    description: "Vacuum,dust,mop",
    status: true,
};
console.log(task3);
function display(task) {
    console.log("Title         :- ".concat(task.title));
    console.log("Description   :- ".concat(task.description));
    console.log("Task Status   :-".concat(task.status, " "));
}
display(task1);
display(task2);
display(task3);
