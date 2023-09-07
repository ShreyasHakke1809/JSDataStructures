var arr = new Array(2,-1,-1,2,-1);
console.log(arr);

for( let i=0; i<5; i++)
{
    for( let j=i+1; j<5; j++)
    {
        for( let k=j+1; k<5; k++)
        {
            if(arr[i]+arr[j]+arr[k] == 0)
            {
                console.log("Numbers found :(" + arr[i] + ")+(" + arr[j] + ")+(" + arr[k] +")= 0");
            }
        }
    }
}