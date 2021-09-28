//total sum
var arr=[2,3,4,5,6,7]
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

//max 
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

//min
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);


