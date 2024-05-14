/*function calculateGrade(math: number, physics: number, chem: number) : string
{
   var avg = (math + physics + chem) / 3;

   if (avg <= 70) {
    return `Grade C (${avg})`
   } else if (avg > 70 && avg < 90) {
    return `Grade B (${avg})`;
   } else {
    return `Grade A (${avg})`;
   }
}

var math = Number(prompt(`Enter the math marks`)); // 80
var physics = Number(prompt(`Enter the physics marks`)) ; // 75
var chem = Number(prompt(`Enter the chem marks`));

console.log(calculateGrade(math, physics, chem));  */
    
    const maths : any = prompt(`Enter Maths Marks `);
    const m = parseInt(maths);

    const chem : any =prompt(`Enter Chemistry Marks`);
    const c=parseInt(chem);

    const phy : any = prompt(`Enter Physics Marks`);
    const p= parseInt(phy);

    let sum : number =(m+c+p);
    
    const avg : number =(sum/3);
    console.log(avg);

    if(avg>=90 && avg<=100){
        console.log(`${avg} A Grade`);
        }
        else if(avg>=70 && avg <90){
            console.log(`${avg} B Grade`);
         
        }else if(avg>=35 && avg<70 ){
    
        
        console.log(`${avg}  C Grade`);
    
        }
        else
        console.log(`Invalid Input`);
     
        
    
