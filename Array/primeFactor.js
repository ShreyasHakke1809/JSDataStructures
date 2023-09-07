function primeFactor(number)
{
    if (number <= 1) 
    {
        console.log("Not allowed!"); 
        exit;
    }
    
    for (let i=2; i <= number; i++)
    { 
        if ((number % i) == 0)
        { 
        let factor = i; 
            for (let j=2; j < factor; j++ )
            {  
                    if ((factor % j) == 0)
                    { 
                        flag=1 
                        break;
                    }
            }
            if (flag == 0)
            {
                array[k] = factor; 
                k++;
                count = 1;
            }
        }
    }
}
    let count = 0; 
    let flag = 0;
    let k=0; 
    let array = new Array();

    readline = require("readline-sync")
    let number = readline.question("enter the number")
    
    primeFactor(number);
    
    if (count == 0) 
        console.log("No prime factors found except 1 and input"); 
    else 
        console.log("The prime factors of the number : "+ array); 