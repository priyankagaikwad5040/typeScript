interface ITask{
    title :string;
    description ? : string;
    status ? :boolean  ;
    
}
let task1 : ITask ={
    title :"Finish project report",
    // description :"",
     status:false,
    
}
console.log(task1);

let task2 : ITask ={
    title :"Buy Groceries",
    description :"Milk ,bread,eggs",
     status:false,
}
console.log(task2);

let task3 : ITask ={
    title :"Clean Room",
    description  :"Vacuum,dust,mop",
    status:true,
}
console.log(task3);
function display (task : ITask){
    console.log(`Title         :- ${task.title}`);
    console.log(`Description   :- ${task.description  }`);
    console.log(`Task Status   :-${task.status } `);
    
    
    
}
display(task1);
display(task2);
display(task3);


