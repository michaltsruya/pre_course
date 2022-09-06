const countOddFromZeroToNum = (num)=>{ 
    //Your Code Here :-)
    let count = 0;
        for(let i=1; i<num; i=i+2)
        {   
            count++;
        }
    if(num%2 == 0)
        return count;
    else
        return ++count;
    }