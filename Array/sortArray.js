var array1 = [];
for(var i=0; i<=9; i++)
{
    array1.push(Math.floor(100 + Math.random()* 900));
}
console.log(array1);
console.log(array1.sort());
var second_largest = console.log(array1[8]);
var second_smallest = console.log(array1[1]);