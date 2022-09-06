const divideOrHasSeven = (start,end)=>
{
    let count=0, div_by_7=0, include_7=0,aux_num=0;
    for(let num=start; num<end; num++) 
    {
        if(num%7 ==0)
        {
            count ++;
            continue;
        }
        else
        {
        aux_num = num;
        while(aux_num>0)
        {
            if(aux_num%10 == 7)
                {
                    count ++;
                    break;
                }
            aux_num =  Math.trunc(aux_num / 10); 
        }  
        }
    }       
return count;
}
