/*let math1 :any =prompt("Maths Marks   ");
let phy : any =prompt("Physics Marks   ");
let chem : any =prompt("Chemistry Marks  ");

let num1 =  math1 as number ;
let num2 = phy as number;
let num3 = chem as number;
let sum : number =num1+num2+num3;
 let avg : number =sum / 3;
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
    */
    
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
     
        
    
