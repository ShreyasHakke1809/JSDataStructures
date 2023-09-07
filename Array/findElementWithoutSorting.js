const arr = [];
for(let i = 1; i<=3;i++)
{
    var num = Math.floor(100+Math.random()*900);
    console.log("Number :"+num);
    arr.push(num);
}
console.log("Values: "+arr);
